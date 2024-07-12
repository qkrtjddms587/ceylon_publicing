import { styled } from "styled-components";
import { SearchBtnsProps } from "./SearchBtn";

const Wrapper = styled.button`
  width: 100%;
  height: 53px;
  background-color: rgba(35, 168, 214, 1);
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 23px;
  @media (max-width: 500px) {
    margin-top: 20px;
  }
  margin-top: 30px;
`;

export default function MobileSearchBtn({ text, onClick }: SearchBtnsProps) {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
}
