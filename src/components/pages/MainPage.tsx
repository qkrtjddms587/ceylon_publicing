import BestSection from "../sections/BestSection";
import JoinSection from "../sections/JoinSection";
import MainSection from "../sections/MainSection";
import PromotionSection from "../sections/PromotionSection";
import RecommendSection from "../sections/RecommendSection";
import ReviewSection from "../sections/ReviewSection";

export interface IBgObj {
  title: string;
  subtitle: string;
  imagePath: string;
}

export default function MainPage() {
  return (
    <div>
      <MainSection />
      <BestSection />
      <PromotionSection />
      <RecommendSection />
      <JoinSection />
      <ReviewSection />
    </div>
  );
}
