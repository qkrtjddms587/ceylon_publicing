import { Dispatch } from "react";
import { styled } from "styled-components";

type Category = "best" | "europe";

interface CategorySelectorProps {
  category: Category;
  setCategory: Dispatch<React.SetStateAction<"best" | "europe">>;
}

const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 8vw;
  @media (max-width: 1000px) {
    margin-bottom: 50px;
  }
  width: 90%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 30px;
  .category__bar {
    display: flex;
    justify-content: center;
    color: rgba(228, 228, 228, 1);
    border-bottom: 3px solid rgba(228, 228, 228, 1);
    font-size: 2vw;
    @media (max-width: 1000px) {
      font-size: 1.5rem;
      font-weight: 700;
    }
    line-height: 1.6;
  }
  .select__category {
    color: rgba(0, 0, 0, 1);
    border-bottom: 3px solid rgba(0, 0, 0, 1);
  }
`;

export default function CategorySelector({
  category,
  setCategory,
}: CategorySelectorProps) {
  const handleClick = (category: Category) => {
    setCategory(category);
  };
  return (
    <Wrapper>
      <div
        className={`category__bar ${
          category === "best" ? "select__category" : ""
        }`}
        onClick={() => handleClick("best")}
      >
        베스트휴양지
      </div>
      <div
        className={`category__bar ${
          category === "europe" ? "select__category" : ""
        }`}
        onClick={() => handleClick("europe")}
      >
        유럽
      </div>
    </Wrapper>
  );
}
