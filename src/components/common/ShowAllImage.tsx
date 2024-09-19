import { styled } from "styled-components";
import CategorySelector from "./CategorySelector";
import { useState } from "react";
import SubCategorySelector from "./SubCategorySelector";

interface ShowAllImageProps {
  images: {
    mainImage: string;
    roomImage: { roomType: number; image: string }[];
  };
  setOnModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Wrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  .images__window__wrapper {
    width: 80%;
    max-width: 800px;
    background-color: rgba(255, 255, 255, 1);
    padding: 6vw 0;
    border-radius: 2.3vw;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);
    position: relative;
    .close__btn {
      position: absolute;
      top: 1.5vw;
      right: 1.5vw;
      color: rgba(220, 220, 220, 1);
      width: 40px;
      cursor: pointer;
    }
  }
  .images__wrapper {
    width: 80%;
    margin: 10px auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.3vw;
    .main__images__wrapper {
      width: 100%;
      aspect-ratio: 1.68;
      position: relative;
      .main__images {
        width: 100%;
        overflow: hidden;
        aspect-ratio: 1.68;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .btn__wrapper {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        svg {
          position: absolute;
          top: 0;
          bottom: 0;
          color: rgba(220, 220, 220, 1);
          width: 4vw;
          z-index: 5;
          cursor: pointer;
        }
        .left__btn {
          transform: translate(-50%, -50%);
          left: -30px;
        }
        .right__btn {
          transform: translate(50%, -50%);
          right: -30px;
        }
      }
    }
    .images__items__list__wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 0.3vw;
      .images__item__wrapper {
        width: 100%;
        aspect-ratio: 1.5;
        overflow: hidden;
        position: relative;
        div {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 4;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export default function ShowAllImage({
  images,
  setOnModal,
}: ShowAllImageProps) {
  const [categoryId, setCategoryId] = useState(0);
  const selectCategory = categoryId === 0 ? images.mainImage : images.roomImage;
  const [selectedImgId, setSelectedImgId] = useState(0);
  const imagesLength =
    typeof selectCategory === "string" ? 0 : selectCategory.length;
  const [roomTypeTitle, setRoomTypeTitle] = useState(`전체(${imagesLength})`);
  const categoryObjs = [
    { idx: 0, title: "호텔 대표사진" },
    { idx: 1, title: "객실별 사진" },
  ];
  const roomTypeObjs = [
    { idx: 0, title: `전체(${imagesLength})` },
    {
      idx: 1,
      title: "룸타입1",
    },
    {
      idx: 2,
      title: "룸타입2",
    },
    {
      idx: 3,
      title: "룸타입3",
    },
  ];

  return (
    <Wrapper>
      <div className="images__window__wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="close__btn"
          onClick={() => setOnModal(false)}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
        <CategorySelector
          categories={categoryObjs}
          type="button"
          currentIdx={categoryId}
          setCurrentIdx={setCategoryId}
        />
        <div className="images__wrapper">
          <SubCategorySelector
            categories={roomTypeObjs}
            type="button"
            currentTitle={roomTypeTitle}
            setCurrentTitle={setRoomTypeTitle}
          />
          <div className="main__images__wrapper">
            <div className="btn__wrapper">
              {selectedImgId !== 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="left__btn"
                  onClick={() => setSelectedImgId((prev) => prev - 1)}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {selectedImgId < imagesLength - 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="right__btn"
                  onClick={() => setSelectedImgId((prev) => prev + 1)}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="main__images">
              <img src={images.roomImage[selectedImgId].image} alt="temp" />
            </div>
          </div>
          <div className="images__items__list__wrapper">
            {images.roomImage.map((image, idx) => (
              <div
                className="images__item__wrapper"
                onClick={() => setSelectedImgId(idx)}
              >
                {idx !== selectedImgId && <div />}
                <img src={image.image} alt="temp" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
