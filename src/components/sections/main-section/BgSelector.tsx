import { Dispatch, SetStateAction } from "react";
import { IBgObj } from "../../pages/MainPage";
import { styled } from "styled-components";

interface MainBgSelectProps {
  selectId: number;
  bgObjs: IBgObj[];
  setSelectId: Dispatch<SetStateAction<number>>;
}

const Wrapper = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  position: absolute;
  bottom: 1.5vw;
  right: 1.5vw;
  display: flex;
  gap: 1vw;
`;

const ImageWrapper = styled.div`
  width: 12vw;
  aspect-ratio: 1.6;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  &.bg__select {
    border: 2px solid #ffffff;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function BgSelector({
  selectId,
  bgObjs,
  setSelectId,
}: MainBgSelectProps) {
  const handleClick = (idx: number) => {
    setSelectId(idx);
  };
  return (
    <Wrapper>
      {bgObjs.map((bgObj, idx) => (
        <ImageWrapper
          key={bgObj.imagePath}
          className={`${idx === selectId ? "bg__select" : ""}`}
          onClick={() => handleClick(idx)}
        >
          <Image src={bgObj.imagePath} />
        </ImageWrapper>
      ))}
    </Wrapper>
  );
}
