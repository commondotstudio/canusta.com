import { InterfaceUnknownObject } from "@/pages/[slug]";
import { useEffect, useRef, useState } from "react";
import PortfolioAzItem from "./PortfolioAzItem";
import PortfolioAzSubheader from "./PortfolioAzSubheader";

export default function PortfolioAzList(props: InterfaceUnknownObject) {
  const listItemLength = props[`az-list`] as number;

  const listItems = Array.from({ length: listItemLength }, (_, index) => ({
    name: props[`az-list_${index}_name`] as string,
    category: props[`az-list_${index}_category`] as string,
    ticker: props[`az-list_${index}_ticker`] as string,
    ceased: props[`az-list_${index}_ceased`] as string,
    firstInvestment: props[`az-list_${index}_firstInvestment`] as string,
    currentStage: props[`az-list_${index}_currentStage`] as string,
    hasCaseStudy: props[`az-list_${index}_hasCaseStudy`] as string,
    caseStudyPage: props[
      `az-list_${index}_caseStudyPage`
    ] as unknown as InterfaceCaseStudyPage,
    image: props[`az-list_${index}_image`] as unknown as Image[],
    description: props[`az-list_${index}_description`] as string,
    website: props[`az-list_${index}_website`] as string,
  }));



  const [cards, setCards] = useState(listItems);
  const [listContent, setListContent] = useState<JSX.Element[]>([]);

  const data = useRef(listItems);
  const PortfolioAzItemContent = ({
    data,
  }: {
    data: {
      name: string;
      category: string;
      ticker: string;
      ceased: string;
      firstInvestment: string;
      currentStage: string;
      hasCaseStudy: string;
      caseStudyPage: InterfaceCaseStudyPage;
      image: Image[];
      description: string;
      website: string;
    };
  }) => {
    return (
      <PortfolioAzItem
        name={data.name}
        cat={data.category}
        image={data.image?.[0]?.guid?.rendered}
        hasCaseStudy={data.hasCaseStudy}
        firstInvestment={data.firstInvestment}
        currentStage={data.currentStage}
        description={data.description}
        website={data.website}
        caseStudyPage={data.caseStudyPage?.slug}
      />
    );
  };

  useEffect(() => {
    if (!cards) return;
    const reorderedData = cards.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetterForTheLoop = "";
    const content = reorderedData.map((element, i) => {
      if (currentLetterForTheLoop !== element.name.charAt(0)) {
        currentLetterForTheLoop = element.name.charAt(0);
        return (
          <div key={i} className="w-full">
            <PortfolioAzSubheader letter={element.name.charAt(0)} />
            <PortfolioAzItemContent data={element} />
          </div>
        );
      } else {
        return (
          <div key={i} className="w-full">
            <PortfolioAzItemContent data={element} />
          </div>
        );
      }
    });
    setListContent(content);
  }, [cards]);

  return (
    <div className="p-sm sm:p-md">
      <div className="relative z-10 grid w-full grid-cols-1 justify-items-start sm:grid-cols-1">
        {listContent}
      </div>
    </div>
  );
}

export interface InterfaceCaseStudyPage {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  author: number;
  template: string;
  meta: any[];
  acf: Acf;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  "wp:attachment": About[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface Acf {
  color: string;
  theme: string;
  hero_image: Avatar;
  avatar: Avatar;
  sector: string;
  first_investment: string;
  current_stage: string;
  overview: string;
  highlights: string;
}

export interface Avatar {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: Date;
  modified: Date;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: Sizes;
}

export interface Sizes {
  thumbnail: string;
  "thumbnail-width": number;
  "thumbnail-height": number;
  medium: string;
  "medium-width": number;
  "medium-height": number;
  medium_large: string;
  "medium_large-width": number;
  "medium_large-height": number;
  large: string;
  "large-width": number;
  "large-height": number;
  "1536x1536": string;
  "1536x1536-width": number;
  "1536x1536-height": number;
  "2048x2048": string;
  "2048x2048-width": number;
  "2048x2048-height": number;
}

export interface GUID {
  rendered: string;
}

export interface Image {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: Caption;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Caption;
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  acf: any[];
  description: Caption;
  caption: Caption;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: MediaDetails;
  post: number;
  source_url: string;
  _links: Links;
}

export interface Links {
  self: About[];
  collection: About[];
  about: About[];
  author: Author[];
  replies: Author[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Caption {
  rendered: string;
}

export interface MediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: Sizes2;
  image_meta: ImageMeta;
}

export interface ImageMeta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Sizes2 {
  thumbnail: Full;
  full: Full;
}

export interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
  filesize?: number;
}
