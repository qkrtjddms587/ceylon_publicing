import { styled } from "styled-components";
import RecommendHeader from "./recommend-section/RecommendHeader";
import RecommendCard from "./recommend-section/RecommendCard";

const Wrapper = styled.section`
  margin: 0 auto;
  color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 7vw 0;
  width: 70%;
  @media (max-width: 500px) {
    width: 100%;
    padding: 100px 20px;
  }
`;

const RecommendCards = styled.div`
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 60px 0;
  }
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5vw;
  margin-top: 2.5vw;
`;

export default function RecommendSection() {
  const recommendObjs = [
    {
      id: 0,
      resort: "반얀트리",
      location: "태국/푸켓",
      rating: 4.76,
      imagePath: "",
    },
    {
      id: 1,
      resort: "반얀트리",
      location: "태국/푸켓",
      rating: 3.24,
      imagePath: "",
    },
    {
      id: 2,
      resort: "반얀트리",
      location: "태국/푸켓",
      rating: 4.33,
      imagePath: "",
    },
    {
      id: 3,
      resort: "반얀트리",
      location: "태국/푸켓",
      rating: 2.51,
      imagePath: "",
    },
  ];
  return (
    <Wrapper>
      <RecommendHeader
        title={["3-4인 가족", "추천여행지"]}
        subtitle="여행전문가가 추천하는 여행지"
      />
      <RecommendCards>
        {recommendObjs.map((obj) => (
          <RecommendCard key={obj.id} {...obj} />
        ))}
      </RecommendCards>
    </Wrapper>
  );
}
