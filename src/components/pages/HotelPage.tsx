import { useParams } from "react-router-dom";
import { getHotelData, getHotelDataById } from "../../utilies";
import HotelHeaderSection from "../sections/HotelHeaderSection";

export default function HotelPage() {
  const { hotelId } = useParams();
  const id = +hotelId!;
  const HotelObjs = getHotelDataById(id);
  return (
    <div>
      <HotelHeaderSection {...HotelObjs} />
    </div>
  );
}
