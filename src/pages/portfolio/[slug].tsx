import CaseHero from "@/components/CaseStudy/CaseHero";
import ShortInfo from "@/components/CaseStudy/ShortInfo";
import Footer from "@/components/Footer/Footer";
import SiteLayout from "@/components/Layout/site-layout";
import PageHeader from "@/components/CaseStudyComponents/PageHeader";
import Text2Column from "@/components/CaseStudyComponents/Text2Column";
import useStore from "@/utils/geo-3-store";
import Head from "next/head";
import { useEffect, useRef } from "react";

export interface PageQL {
  node: Node;
  portfolioGroup: any;
  title: string;
  color: string;
  theme: string;
  slug: string;
  overview: string;
  highlights: string;
  quote: string;
  personName: string;
}

const CaseStudy = ({ page }: { page: PageQL }) => {
  const { setGeoTheme, setGeoBackground, setTextColor } = useStore();
  const refDetails = useRef<HTMLDivElement>(null);

  const pageData = {
    geoTheme: "customPage",
    geoBackground: page.portfolioGroup.color,
    textColor: page.portfolioGroup.theme,
    name: page.title,
    sector: page.portfolioGroup.sector,
    currentStage: page.portfolioGroup.currentStage,
    firstInvestment: page.portfolioGroup.firstInvestment,
    overview: page.overview,
    highlights: page.highlights,
    quote: page.quote,
    personName: page.personName,
    color: page.color,
    theme: page.theme,
    slug: page.slug,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setGeoTheme("customPage");
      setGeoBackground(page.portfolioGroup.color);
      setTextColor(page.portfolioGroup.theme as "light" | "dark");
    }
  }, []);

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
      <main className="pointer-events-auto">
        <PageHeader>{page.title}</PageHeader>
        <ShortInfo pageData={pageData} refDetails={refDetails} />
        <CaseHero
          source={page.portfolioGroup.heroImage.mediaItemUrl}
          refDetails={refDetails}
        />
        <Text2Column
          bigHeader1="Overview"
          text2={page.portfolioGroup.overview}
        />
        {page.portfolioGroup.highlights && (
          <Text2Column
            bigHeader1="Highlights"
            text2={page.portfolioGroup.highlights}
          />
        )}

        <Footer />
      </main>
    </>
  );
};

CaseStudy.getLayout = (page: any) => {
  return <SiteLayout>{page}</SiteLayout>;
};

export default CaseStudy;

export async function getStaticPaths() {
  const getPortfolio = `query GetPortfolio {
    allPortfolio {
      nodes {
        portfolioGroup {
          color
          currentStage
          fieldGroupName
          firstInvestment
          highlights
          overview
          sector
          theme
          heroImage {
            mediaItemUrl
          }
        }
        title
        slug
      }
    }
  }`;

  const WP_API_URL = process.env.WORDPRESS_API_URL;
  if (!WP_API_URL) return;

  const data = await fetch(WP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: getPortfolio,
    }),
  });

  const json = await data.json();

  const paths = json.data.allPortfolio.nodes.map((item: any) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const getPortfolio = `query GetPortfolio {
    allPortfolio {
      nodes {
        portfolioGroup {
          color
          currentStage
          fieldGroupName
          firstInvestment
          highlights
          overview
          sector
          theme
          heroImage {
            mediaItemUrl
          }
        }
        title
        slug
      }
    }
  }`;

  const WP_API_URL = process.env.WORDPRESS_API_URL;
  if (!WP_API_URL) return;

  const data = await fetch(WP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: getPortfolio,
    }),
  });

  const json = await data.json();

  const page = json.data.allPortfolio.nodes.find(
    (item: any) => item.slug === params.slug,
  );

  return {
    props: {
      page,
    },
    revalidate: 10,
  };
}
