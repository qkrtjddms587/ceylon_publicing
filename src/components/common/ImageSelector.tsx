import { useState } from "react";
import { styled } from "styled-components";
import ShowAllImage from "./ShowAllImage";

interface ImageSelectorProps {
  images: {
    mainImage: string;
    roomImage: { roomType: number; image: string }[];
  };
}

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto 2vw auto;
  position: relative;
  max-width: 1200px;

  .images__grid__wrapper {
    display: grid;
    gap: 0.5vw;
    grid-template:
      "a a b" 1fr
      "a a c" 1fr;
    div {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    div:first-child {
      grid-area: a;
    }
    div:nth-child(2) {
      grid-area: b;
    }
    div:last-child {
      grid-area: c;
    }
  }
  .show__all__btn {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.33);
    font-size: 0.8vw;
    padding: 0.5vw 1vw;
    gap: 0.2vw;
    transition: background-color 0.2s ease-in;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    svg {
      width: 1vw;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

export default function ImageSelector({ images }: ImageSelectorProps) {
  const [onModal, setOnModal] = useState(false);
  return (
    <Wrapper>
      {onModal && <ShowAllImage images={images} setOnModal={setOnModal} />}
      <div className="images__grid__wrapper">
        {images.roomImage.slice(0, 3).map((image, idx) => (
          <div key={idx}>
            <img src={image.image} alt="temp" />
          </div>
        ))}
      </div>
      <div className="show__all__btn" onClick={() => setOnModal(true)}>
        <span>호텔 사진 모두 보기</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Wrapper>
  );
}
