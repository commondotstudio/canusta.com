import { BlockData } from "@/components/default-template";
import ContactComponent from "@/components/Contact/Contact";
import Collapsable from "@/components/Collapsable/Collapsable";
import GiantText from "@/components/GiantText/GiantText";
// import Home from "@/components/Home/Home";
import Image1Column from "@/components/Image1Column/Image1Column";
import Image2Column from "@/components/Image2Column/Image2Column";
import LineSpacer from "@/components/Elements/LineSpacer";
import PageHeader, {
  PageHeaderProps,
} from "@/components/PageHeader/PageHeader";
import PortfolioAzList from "@/components/PortfolioAZ/PortfolioAzList";
import PortfolioSection from "@/components/Home/PortfolioSection/PortfolioSection";
import Quote from "@/components/Text1Column/Quote";
import SectionHeader1 from "@/components/SectionHeader/SectionHeader1";
import SectionHeader2 from "@/components/SectionHeader/SectionHeader2";
import Stats from "@/components/Stats/Stats";
import Text1Column from "@/components/Text1Column/Text1Column";
import Text2Column from "@/components/Text3Column/Text2Column";
import Text3Column from "@/components/Text3Column/Text3Column";
import Team from "@/components/Team/Team";
import ResourcesList from "@/components/Resources/ResourcesList";

import {
  Block,
  InterfaceGiantText,
  InterfaceHome,
  InterfaceSectionHeader1,
  InterfaceText1Column,
  InterfaceText3Column,
  InterfaceUnknownObject,
} from "@/pages/[slug]";
import PortfolioFeatured from "@/components/Portfolio/PortfolioFeatured";

export default function DynamicComponent({
  name,
  data,
}: {
  name: Block["name"];
  data: BlockData;
}) {
  const components = {
    "acf/contact": <ContactComponent {...(data as InterfaceUnknownObject)} />,
    "acf/collapsable": <Collapsable {...(data as InterfaceUnknownObject)} />,
    "acf/giant-text": <GiantText {...(data as InterfaceGiantText)} />,
    // "acf/home": <Home />,
    "acf/image-1-column": (
      <Image1Column {...(data as InterfaceUnknownObject)} />
    ),
    "acf/image-2-column": (
      <Image2Column {...(data as InterfaceUnknownObject)} />
    ),
    "acf/line-spacer": <LineSpacer />,
    "acf/page-header": <PageHeader {...(data as PageHeaderProps)} />,
    "acf/portfolio-az-list": (
      <PortfolioAzList {...(data as InterfaceUnknownObject)} />
    ),
    "acf/portfolio-featured": (
      <PortfolioFeatured {...(data as InterfaceUnknownObject)} />
    ),
    "acf/portfolio-section": (
      <PortfolioSection {...(data as InterfaceUnknownObject)} />
    ),
    "acf/resources-featured": (
      <ResourcesList {...(data as InterfaceUnknownObject)} />
    ),
    "acf/quote": <Quote {...(data as InterfaceUnknownObject)} />,
    "acf/section-header-1": (
      <SectionHeader1>{(data as InterfaceSectionHeader1)?.text}</SectionHeader1>
    ),
    "acf/section-header-2": (
      <SectionHeader2 {...(data as InterfaceUnknownObject)} />
    ),
    "acf/stats": <Stats {...(data as InterfaceUnknownObject)} />,
    "core/separator": <LineSpacer />,
    "acf/team": <Team {...(data as InterfaceUnknownObject)} />,
    "acf/text-1-column": (
      <Text1Column  {...(data as InterfaceUnknownObject)} />
    ),
    "acf/text-2-column": <Text2Column {...(data as InterfaceUnknownObject)} />,
    "acf/text-3-column": <Text3Column {...(data as InterfaceUnknownObject)} />,
  };
  return components[name];
}

("acf/team");
