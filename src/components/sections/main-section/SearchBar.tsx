import { styled } from "styled-components";
import SearchInput from "./search-bar/SearchInput";
import SearchBtn from "./search-bar/SearchBtn";

const Wrapper = styled.form`
  @media (max-width: 1000px) {
    display: none;
  }
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 11px;
  padding: 1.5vw 2.5vw;
  justify-content: space-between;
  margin-top: 10vw;
  border: 0.5px solid rgba(99, 99, 99, 1);
  color: rgba(0, 0, 0, 1);
  div:nth-child(2) {
    padding-left: 50px;
    border-left: 0.5px dotted #636363;
  }
`;

export default function SearchBar() {
  return (
    <Wrapper>
      <SearchInput kind="loc" />
      <SearchInput kind="date" />
      <SearchBtn text="찾기" onClick={() => {}} />
    </Wrapper>
  );
}
