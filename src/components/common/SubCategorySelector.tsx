import { styled } from "styled-components";
import { Category } from "./CategorySelector";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  color: rgba(51, 51, 51, 1);
  font-size: 1vw;
  margin-bottom: 1vw;
  span {
    line-height: 1;
    border-right: 1px solid rgba(148, 148, 148, 1);
    padding: 0 0.5vw;
    &.selected__category {
      font-weight: 700;
      color: rgba(11, 11, 11, 1);
    }
    &:last-child {
      border-right: none;
    }
  }
`;

interface SubCategorySelectorProps {
  categories: Category[];
  currentTitle: string;
  setCurrentTitle: React.Dispatch<React.SetStateAction<string>>;
}

export default function SubCategorySelector({
  categories,
  currentTitle,
  setCurrentTitle,
}: SubCategorySelectorProps) {
  return (
    <Wrapper>
      {categories.map(({ idx, title }) => (
        <span
          key={idx}
          className={currentTitle === title ? "selected__category" : ""}
          onClick={() => setCurrentTitle(title)}
        >
          {title}
        </span>
      ))}
    </Wrapper>
  );
}
