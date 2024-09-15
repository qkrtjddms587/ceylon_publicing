import { useParams } from "react-router-dom";
import ResortSearchBar from "../sections/resort-main-section/ResortSearchBar";
import { getHotelData, getTourData } from "../../utilies";
import ResortCategorySection from "../sections/ResortCategorySection";
import TourHeaderSection from "../sections/TourHeaderSection";

export default function ResortDetailPage() {
  const { tourId } = useParams();
  const id = +tourId!;
  const { tourObjs, selectedTour } = getTourData(id);
  const hotelObjs = getHotelData(id);
  return (
    <div>
      <ResortSearchBar itemObjs={tourObjs} />
      <TourHeaderSection {...selectedTour} />
      <ResortCategorySection hotelObjs={hotelObjs} />
    </div>
  );
}
