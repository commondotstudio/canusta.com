import DefaultTemplate, { BlockData } from "@/components/default-template";
import { isEmpty } from "underscore";
import { replaceValueForKey, searchObjectKeys } from "../../utils/functions";

export interface Block {
  name:
    | "acf/text-1-column"
    | "acf/page-header"
    | "acf/portfolio-az-list"
    | "core/separator";
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  data:
    | InterfaceText1Column
    | InterfacePageHeader
    | InterfaceUnknownObject
    | InterfaceGiantText
    | InterfaceHome;
  mode: string;
  content: string;
}

export interface InterfaceGiantText {}

export interface InterfaceHome {
  section_1_opening_text: string;
  section_2_column_1_text: string;
  section_2_column_2_text: string;
  section_2_column_3_text: string;
}

export interface InterfacePageHeader {
  big_text?: string;
  long_text?: string;
  small_caption: string;
}

export interface InterfaceSectionHeader1 {
  text: string;
}

export interface InterfaceText1Column {
  text: string;
  _text: string;
}

export interface InterfaceText3Column {
  header1: string;
  header2: string;
  header3: string;
  text1: string;
  text2: string;
  text3: string;
  type: "text only" | "text and number" | "text and image";
  mobileLayout: "stacked" | "side by side";
}

export interface InterfaceUnknownObject {
  [key: string]: string | number | boolean;
}

export default function SlugTestPage({
  page,
}: {
  page: {
    acf: {
      geo_theme:
        | "home"
        | "blackPage"
        | "whitePage"
        | "colorPage"
        | "customPage";
      pageTitle: string;
    };
    block_data: {
      blockName: Block["name"];
      attrs: {
        name: Block["name"];
        data: BlockData;
      };
    }[];
  };
}) {
  return <DefaultTemplate page={page} />;
}

export async function getStaticPaths() {
  const WP_API_URL = process.env.WORDPRESS_REST_URL;
  if (!WP_API_URL) return;

  const data = await fetch(WP_API_URL + "/pages", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  const paths = data.map((a: { slug: string }) => ({
    params: { slug: a?.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;

  const WP_API_URL = process.env.WORDPRESS_REST_URL;
  if (!WP_API_URL) return;

  let data = await fetch(WP_API_URL + "/pages?slug=" + slug, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  const findCaseStudies = searchObjectKeys(data, "caseStudyPage");

  // loop through case studies and fetch them, then update the data
  for (let i = 0; i < findCaseStudies.length; i++) {
    const element = findCaseStudies[i];
    const portfolioPage = await fetch(
      WP_API_URL + "/portfolio?include[]=" + element.value,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    ).then((res) => res.json());

    replaceValueForKey(data, element.key, portfolioPage?.[0]);
  }

  const findPosts = searchObjectKeys(data, "featured_list");

  // loop through portfolio featured list and fetch them, then update the data
  for (let i = 0; i < findPosts.length; i++) {
    const element = findPosts[i];
    const post = await fetch(
      WP_API_URL + "/portfolio?include[]=" + element.value,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    ).then((res) => res.json());

    if (post) {
      replaceValueForKey(data, element.key, post);
    }
  }

  const findPosts2 = searchObjectKeys(data, "portfolio_section");

  // loop through portfolio featured list and fetch them, then update the data
  for (let i = 0; i < findPosts2.length; i++) {
    const element = findPosts2[i];
    const post = await fetch(
      WP_API_URL + "/portfolio?include[]=" + element.value,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    ).then((res) => res.json());

    if (post) {
      replaceValueForKey(data, element.key, post);
    }
  }

  const findPostsResource = searchObjectKeys(data, "resources_list_");

  // loop through resource resource list and fetch them, then update the data
  for (let i = 0; i < findPostsResource.length; i++) {
    const element = findPostsResource[i];
    const post = await fetch(
      WP_API_URL + "/resource?include[]=" + element.value,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    ).then((res) => res.json());

    if (post) {
      replaceValueForKey(data, element.key, post);
    }
  }

  const findImages = searchObjectKeys(data, "image");

  // loop through images and fetch them, then update the data
  for (let i = 0; i < findImages.length; i++) {
    const element = findImages[i];
    const image = await fetch(
      WP_API_URL + "/media?include[]=" + element.value,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    ).then((res) => res.json());

    if (image) {
      replaceValueForKey(data, element.key, image);
    }
  }

  if (!data || isEmpty(data)) {
    return {
      notFound: true,
    };
  }

  const findVideos = searchObjectKeys(data, "video");

  // loop through videos and fetch them, then update the data
  for (let i = 0; i < findVideos.length; i++) {
    const element = findVideos[i];
    const video = await fetch(
      WP_API_URL + "/media?include[]=" + element.value,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    ).then((res) => res.json());

    if (video) {
      replaceValueForKey(data, element.key, video);
    }
  }

  if (!data || isEmpty(data)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page: data?.[0],
    },
    revalidate: 10,
  };
}
