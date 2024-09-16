import { useParams } from "react-router-dom";
import { getHotelDataById } from "../../utilies";
import HotelHeaderSection from "../sections/HotelHeaderSection";
import HotelInfoSection from "../sections/HotelInfoSection";

export default function HotelPage() {
  const { hotelId } = useParams();
  const id = +hotelId!;
  const HotelObjs = getHotelDataById(id);
  return (
    <div>
      <HotelHeaderSection {...HotelObjs} />
      <HotelInfoSection {...HotelObjs} />
    </div>
  );
}
