import { useState } from "react";
import BgSelector from "./main-section/BgSelector";
import styled from "styled-components";
import BgContents from "./main-section/BgContents";
import SearchBar from "./main-section/SearchBar";
import BgSelectBtns from "./main-section/BgSelectBtns";
import MobileSearchBar from "./main-section/MobileSearchBar";
import mainImg from "../../images/main_img.jpg";
import mauritiusImg from "../../images/img_mauritius.jpg";
import ausImg from "../../images/img_aus.jpg";
import guamImg from "../../images/img_guam.jpg";

const Wrapper = styled.section`
  width: 100%;
  @media (max-width: 1000px) {
    height: 100vh;
    overflow: hidden;
  }
  aspect-ratio: 16/9;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BgImage = styled.div<{ $imagePath: string }>`
  width: 100%;
  height: 100%;
  @media (max-width: 1000px) {
    width: 1240px;
    height: 55vh;
    top: -18px;
  }
  background-image: url(${({ $imagePath }) => $imagePath});
  position: absolute;
  background-size: cover;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  transition: background-image 0.2s ease-in;
`;

const Contents = styled.div`
  @media (max-width: 1000px) {
    width: 90%;
  }
  position: absolute;
  width: 80%;
  height: 100%;
  max-width: 1200px;
`;

export default function MainSection() {
  const [selectId, setSelectId] = useState(0);
  const bgObjs = [
    {
      title: "사무이 럭셔리 콜라보",
      subtitle: "콘래드2박 + 반얀트리2박",
      imagePath: mainImg,
    },
    {
      title: "사무이 럭셔리 콜라보",
      subtitle: "콘래드2박 + 반얀트리2박",
      imagePath: mauritiusImg,
    },
    {
      title: "사무이 럭셔리 콜라보",
      subtitle: "콘래드2박 + 반얀트리2박",
      imagePath: ausImg,
    },
    {
      title: "사무이 럭셔리 콜라보",
      subtitle: "콘래드2박 + 반얀트리2박",
      imagePath: guamImg,
    },
  ];
  return (
    <Wrapper>
      <BgImage $imagePath={bgObjs[selectId].imagePath} />
      <Contents>
        <SearchBar />
        <BgContents
          title={bgObjs[selectId].title}
          subtitle={bgObjs[selectId].subtitle}
          mobileTitle="내가 꿈꾸는 허니문"
          mobileSubtitle="실론투어 여행 전문가가 설계해 드리는 상력한 허니문"
        />
        <BgSelectBtns
          selectId={selectId}
          objsLength={bgObjs.length}
          setSelectId={setSelectId}
        />
      </Contents>
      <BgSelector
        selectId={selectId}
        bgObjs={bgObjs}
        setSelectId={setSelectId}
      />
      <MobileSearchBar />
    </Wrapper>
  );
}
