import Footer from "@/components/Footer/Footer";
import SiteLayout from "@/components/Layout/site-layout";
import PageHeader from "@/components/CaseStudyComponents/PageHeader";
import ResourceContent from "@/components/Resources/ResourceContent";
import { roobert } from "@/utils/fonts";
import { dateCleaner } from "@/utils/utils-tsx";
import Head from "next/head";
import Image from "next/image";

export interface PageQL {
  node: Node;
  slug: string;
  title: string;
  dateGmt: string;
  category: string;
  resourcesGroup: any;
  author: any;
  avatar: any;
}

export interface Data {}

const Resources = ({ page }: { page: PageQL }) => {
  const pageData = {
    title: page.title,
    date: page.dateGmt,
    category: page.category,
    content: page.resourcesGroup.content,
    heroImage: page.resourcesGroup.heroImage.mediaItemUrl,
    author: page.author.node.firstName + " " + page.author.node.lastName,
    avatar: page.author.node.avatar.url,
  };

  return (
    <>
      <Head>
        <title>{page.title} | Force Over Mass</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:description" content="" />
        <meta charSet="UTF-8" />
      </Head>
      <main className="pointer-events-auto overflow-hidden">
        <PageHeader>
          <h3
            className={`mb-4 text-base text-resourcesPurple tablet:hidden
            ${roobert.className}
          `}
          >
            {pageData.category}
          </h3>
          <h2 className={`${roobert.className} text-resourcesPurple`}>
            {pageData.title}
          </h2>
        </PageHeader>
        <div
          className={`top-info mx-sm my-sm hidden grid-cols-2   gap-sm border-b border-resourcesPurple pb-[30px] text-lg text-resourcesPurple
        sm:mx-md sm:my-md tablet:grid
        `}
        >
          <div className="font-bold">{pageData.category}</div>
          <div className="font-light">{dateCleaner(pageData.date)}</div>
        </div>
        <div className="mb-[40px] mt-[20px] px-sm tablet:mb-md tablet:px-md">
          <Image
            src={page.resourcesGroup.heroImage.mediaItemUrl}
            alt="hero image"
            width={1080}
            height={720}
            quality={100}
            className="flex w-full items-center justify-center rounded-lg "
          />
        </div>
        <ResourceContent
          content={pageData.content}
          author={pageData.author}
          avatar={pageData.avatar}
        />
        <Footer />
      </main>
    </>
  );
};

Resources.getLayout = (page: any) => {
  return <SiteLayout>{page}</SiteLayout>;
};

export default Resources;

export async function getStaticPaths() {
  const getResources = ` {
    allResource {
      nodes {
        title
        dateGmt
        category
        slug
        resourcesGroup {
          content
          heroImage {
            mediaItemUrl
          }
        }
        author {
          node {
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  }`;

  const WP_API_URL = process.env.WORDPRESS_API_URL;
  if (!WP_API_URL) return;

  const data = await fetch(WP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: getResources,
    }),
  });

  const json = await data.json();

  const paths = json.data.allResource.nodes.map((item: any) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const getResources = ` {
    allResource {
      nodes {
        title
        dateGmt
        category
        slug
        resourcesGroup {
          content
          heroImage {
            mediaItemUrl
          }
        }
        author {
          node {
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  }`;

  const WP_API_URL = process.env.WORDPRESS_API_URL;
  if (!WP_API_URL) return;

  const data = await fetch(WP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: getResources,
    }),
  });

  const json = await data.json();

  const page = json.data.allResource.nodes.find(
    (item: any) => item.slug === params.slug,
  );

  return {
    props: {
      page,
    },
    revalidate: 10,
  };
}
