import { styled } from "styled-components";

export interface SearchBtnsProps {
  text: string;
  onClick: () => void;
}

const Wrapper = styled.button`
  width: 250px;
  height: 48px;
  background-color: #2fb4e2;
  border: none;
  border-radius: 10px;
  color: white;
`;

export default function SearchBtn({ text, onClick }: SearchBtnsProps) {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
}
