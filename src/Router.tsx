import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./components/pages/MainPage";
import ResortPage from "./components/pages/ResortPage";
import ResortDetailPage from "./components/pages/ResortDetailPage";
import HotelPage from "./components/pages/HotelPage";
import PackagePage from "./components/pages/PackagePage";
import ShowAllImage from "./components/common/ShowAllImage";

const router = createBrowserRouter([
  {
    path: "ceylon_publicing",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "tour",
        element: <ResortPage />,
      },
      {
        path: "tour/:tourId",
        element: <ResortDetailPage />,
      },
      {
        path: "hotel/:hotelId",
        element: <HotelPage />,
      },
      {
        path: "package/:packageId",
        element: <PackagePage />,
      },
    ],
  },
]);

export default router;
