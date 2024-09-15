import { useState } from "react";
import { styled } from "styled-components";
import SpotCard from "./best-section/SpotCard";
import CategorySelector from "./best-section/CategorySelector";
import MobileCardWrapper from "../common/MobileCardWrapper";
import baliImge from "../../images/img_bali.jpg";
import franceImg from "../../images/img_france.jpeg";

const Wrapper = styled.section`
  @media (max-width: 1000px) {
    width: 100%;
    position: relative;
    height: 600px;
    padding: 100px 0;
  }
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  margin: 0 auto;
  width: 85%;
  padding: 10vw 0;
`;
const SpotCards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default function BestSection() {
  const categorysObj = {
    best: [
      { id: 0, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 1, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 2, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 3, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 4, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 5, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 6, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 7, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 8, title: "발리", subtitle: "Bali", imagePath: baliImge },
      { id: 9, title: "발리", subtitle: "Bali", imagePath: baliImge },
    ],
    europe: [
      { id: 0, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 1, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 2, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 3, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 4, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 5, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 6, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 7, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 8, title: "프랑스", subtitle: "France", imagePath: franceImg },
      { id: 9, title: "프랑스", subtitle: "France", imagePath: franceImg },
    ],
  };
  const [category, setCategory] = useState<"best" | "europe">("best");
  const spots = categorysObj[category];
  return (
    <Wrapper>
      <CategorySelector category={category} setCategory={setCategory} />
      <SpotCards>
        {spots.map((spot) => (
          <SpotCard key={spot.id} {...spot} />
        ))}
      </SpotCards>
      <MobileCardWrapper>
        {spots.map((spot) => (
          <SpotCard key={spot.id} {...spot} />
        ))}
      </MobileCardWrapper>
    </Wrapper>
  );
}
