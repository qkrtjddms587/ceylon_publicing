import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  color: white;
  justify-content: space-between;
  margin-bottom: 2vw;
  @media (max-width: 1000px) {
    padding: 0 20px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }
  .promotion__title {
    font-size: 3vw;
    font-weight: 700;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
    .promotion__main__title {
      @media (max-width: 1000px) {
        display: none;
      }
      display: flex;
      gap: 1vw;
    }
    .color__orange {
      color: rgba(252, 196, 0, 1);
    }
    .promotion__mobile__title {
      @media (min-width: 1000px) {
        display: none;
      }
      display: flex;
      gap: 5px;
    }
  }
  .promotion__desc {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1.6;
    margin-bottom: 5px;
    font-size: 1.2vw;
    letter-spacing: 0;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
    @media (max-width: 500px) {
      align-items: flex-start;
    }
  }
`;

interface PromitionHeaderProps {
  titles: string[];
  descriptions: string[];
  mobileTitle: string[];
}

export default function PromotionHeader({
  titles,
  descriptions,
  mobileTitle,
}: PromitionHeaderProps) {
  return (
    <Wrapper>
      <div className="promotion__title">
        <span>{titles[0]}</span>
        <div className="promotion__main__title">
          <span>{titles[1]}</span>
          <span className="color__orange">{titles[2]}</span>
        </div>
        <div className="promotion__mobile__title">
          <span className="color__orange">{mobileTitle[0]}</span>
          <span>{mobileTitle[1]}</span>
        </div>
      </div>
      <div className="promotion__desc">
        {descriptions.map((description, idx) => (
          <span key={idx}>{description}</span>
        ))}
      </div>
    </Wrapper>
  );
}
