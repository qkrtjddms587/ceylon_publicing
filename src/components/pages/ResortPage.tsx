import ResortMainSection from "../sections/ResortMainSection";
import ResortSearchBar from "../sections/resort-main-section/ResortSearchBar";
import ResortTourSection from "../sections/ResortTourSection";
import ResortBestSection from "../sections/ResortBestTour";
import { getTourData } from "../../utilies";

export default function ResortPage() {
  const { tourObjs } = getTourData();
  return (
    <div>
      <ResortSearchBar itemObjs={tourObjs} />
      <ResortMainSection />
      <ResortTourSection itemObjs={tourObjs} />
      <ResortBestSection />
    </div>
  );
}
