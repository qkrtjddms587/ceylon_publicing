import { styled } from "styled-components";
import PromotionHeader from "./promotion-section/PromotionHeader";
import PromotionCard from "./promotion-section/PromotionCard";
import MobileCardWrapper from "../common/MobileCardWrapper";
import RecommendCard from "./recommend-section/RecommendCard";

const Wrapper = styled.section`
  background-color: royalblue;
  padding: 5vw 10vw;
  @media (max-width: 1000px) {
    padding: 60px 0;
  }
  .promotion__mobile__card__wrapper {
    margin-right: 20px;
    flex: none;
    width: 282px;
    height: 350px;
    .recommend__image__wrapper {
      width: 282px;
      height: 270px;
    }
    .recommend__card__title {
      margin-top: 10px;
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
    }
    .recommend__card__info {
      margin-top: 15px;
      span {
        font-size: 14px;
        color: rgba(255, 255, 255, 1);
      }
      .recommend__rating__wrapper {
        margin-left: 10px;
        width: 70px;
        padding-top: 2px;
      }
    }
  }
`;

const PromotionCards = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5vw;
`;

export default function PromotionSection() {
  const promotionObjs = [
    {
      id: 0,
      title: "사무이 풀빌라 콜라보",
      subtitle: "풀빌라3박 x 풀빌라 2박",
      price: 1590000,
      priceDesc: "1인 요금",
      dueDate: "2024-12-31",
      imagePath: "",
      location: "태국/푸켓",
      rating: 4.72,
      resort: "반얀트리",
    },
    {
      id: 1,
      title: "사무이 풀빌라 콜라보",
      subtitle: "풀빌라3박 x 풀빌라 2박",
      price: 1590000,
      priceDesc: "1인 요금",
      dueDate: "2024-12-31",
      imagePath: "",
      location: "태국/푸켓",
      rating: 4.72,
      resort: "반얀트리",
    },
    {
      id: 2,
      title: "사무이 풀빌라 콜라보",
      subtitle: "풀빌라3박 x 풀빌라 2박",
      price: 1590000,
      priceDesc: "1인 요금",
      dueDate: "2024-12-31",
      imagePath: "",
      location: "태국/푸켓",
      rating: 4.72,
      resort: "반얀트리",
    },
  ];
  return (
    <Wrapper>
      <PromotionHeader
        titles={["Best", "시즌", "추천 프로모션"]}
        descriptions={["실론투어의 여행전문가가", "추천해드리는 상품"]}
        mobileTitle={["올인크루시브", "리조트"]}
      />
      <PromotionCards>
        {promotionObjs.map((obj) => (
          <PromotionCard key={obj.id} {...obj} />
        ))}
      </PromotionCards>
      <MobileCardWrapper>
        {promotionObjs.map((obj) => (
          <div key={obj.id} className="promotion__mobile__card__wrapper">
            <RecommendCard {...obj} />
          </div>
        ))}
      </MobileCardWrapper>
    </Wrapper>
  );
}
