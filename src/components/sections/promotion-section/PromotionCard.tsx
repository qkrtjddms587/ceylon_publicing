import { styled } from "styled-components";
import DueDateBox from "./DueDateBox";

const Wrapper = styled.div`
  .promotion__image__wrapper {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.45);
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .promotion__info__wrapper {
    margin-top: 2vw;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    span {
      &.title {
        font-size: 2vw;
        font-weight: 700;
      }
      &.subtitle {
        font-size: 1vw;
      }
    }
    .promotion__info {
      display: flex;
      flex-direction: column;
      gap: 0.3vw;
      .promotion__price__wrapper {
        margin-top: 1.2vw;
        span {
          margin-right: 0.5vw;
        }
      }
    }
  }
`;

interface PromotionCardProps {
  imagePath: string;
  title: string;
  subtitle: string;
  price: number;
  priceDesc: string;
  dueDate: string;
}

export default function PromotionCard({
  imagePath,
  title,
  subtitle,
  price,
  priceDesc,
  dueDate,
}: PromotionCardProps) {
  const formatPriceWon = (price: number) => {
    return `₩${price.toLocaleString("ko-KR")}`;
  };
  const formatKrDate = (date: string) => {
    const dateParts = date.split("-");
    if (dateParts.length !== 3) {
      throw new Error("Invalid date format. Expected format: YYYY-MM-DD");
    }
    const year = dateParts[0];
    const month = +dateParts[1];
    const day = +dateParts[2];
    return `${year}년 ${month}월 ${day}일`;
  };
  return (
    <Wrapper>
      <div className="promotion__image__wrapper">
        <img src={imagePath} />
      </div>
      <div className="promotion__info__wrapper">
        <div className="promotion__info">
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
          <div className="promotion__price__wrapper">
            <span className="title">{formatPriceWon(price)}</span>
            <span className="subtitle">{priceDesc}</span>
          </div>
          <span className="promotion__duedate subtitle">
            {`[프로모션 기간 ${formatKrDate(dueDate)}까지]`}
          </span>
        </div>
        <DueDateBox dueDate={dueDate} />
      </div>
    </Wrapper>
  );
}
