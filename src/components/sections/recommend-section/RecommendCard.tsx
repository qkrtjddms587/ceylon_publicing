import { styled } from "styled-components";
import RatingBoard from "./RatingBoard";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  margin-bottom: 10px;
  .recommend__image__wrapper {
    width: 100%;
    aspect-ratio: 0.85;
    @media (max-width: 1000px) {
      aspect-ratio: 1.05;
    }
    border-radius: 7px;
    overflow: hidden;
    margin-bottom: 1.2vw;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .recommend__card__title {
    @media (max-width: 1000px) {
      font-size: 20px;
    }
    font-size: 2vw;
    font-weight: 700;
    color: rgba(51, 51, 51, 1);
  }
  .recommend__card__info {
    @media (max-width: 1000px) {
      margin-top: 10px;
    }
    display: flex;
    gap: 1vw;
    span {
      font-size: 1vw;
      @media (max-width: 1000px) {
        font-size: 14px;
      }
      color: rgba(119, 119, 119, 1);
    }
    .recommend__rating__wrapper {
      width: 5vw;
      @media (max-width: 1000px) {
        width: 60px;
        padding-top: 3px;
      }
    }
  }
`;

interface RecommendCardProps {
  rating: number;
  resort: string;
  imagePath: string;
  location: string;
}

export default function RecommendCard({
  resort,
  imagePath,
  location,
  rating,
}: RecommendCardProps) {
  return (
    <Wrapper>
      <div className="recommend__image__wrapper">
        <img src={imagePath} />
      </div>
      <span className="recommend__card__title">{resort}</span>
      <div className="recommend__card__info">
        <span>{location}</span>
        <div className="recommend__rating__wrapper">
          <RatingBoard rating={rating} />
        </div>
      </div>
    </Wrapper>
  );
}
