import Link from "@/components/Elements/Link";
import PortfolioItemContent from "./PortfolioItemContent";

export default function PortfolioAzItem({
  name,
  cat,
  image,
  hasCaseStudy,
  firstInvestment,
  currentStage,
  description,
  website,
  caseStudyPage,
}: {
  name: string;
  cat: string;
  image: string;
  hasCaseStudy?: string;
  firstInvestment?: string;
  currentStage?: string;
  description?: string;
  website?: string;
  caseStudyPage?: string;
}) {
  return (
    <div className="relative">
      {hasCaseStudy === "1" && caseStudyPage && (
        <Link href={`/portfolio/${caseStudyPage}`}>
          <PortfolioItemContent
            name={name}
            cat={cat}
            image={image}
            hasCaseStudy={hasCaseStudy}
            firstInvestment={firstInvestment}
            currentStage={currentStage}
            description={description}
            website={website}
          />
        </Link>
      )}
      {hasCaseStudy === "0" && !caseStudyPage && (
        <PortfolioItemContent
          name={name}
          cat={cat}
          image={image}
          hasCaseStudy={hasCaseStudy}
          firstInvestment={firstInvestment}
          currentStage={currentStage}
          description={description}
          website={website}
        />
      )}
    </div>
  );
}
