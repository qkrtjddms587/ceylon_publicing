import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

export interface SearchInputProps {
  kind: "loc" | "date";
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
  label {
    font-size: 15px;
    line-height: 22px;
    display: flex;
    align-items: flex-end;
    svg {
      width: 23px;
      font-size: 15px;
      margin-bottom: 2px;
      margin-right: 2px;
      color: rgba(36, 167, 212, 1);
    }
  }
  input {
    font-size: 21px;
    font-weight: 700;
    max-width: 210px;
    &::placeholder {
      color: #b3b3b3;
    }
  }
`;

export default function SearchInput({
  kind,
  ...rest
}: SearchInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrapper>
      <label htmlFor={kind}>
        {kind === "loc" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
        )}
        {kind === "loc" ? "여행지" : "출발일"}
      </label>
      <input
        id={kind}
        type="text"
        {...rest}
        placeholder={
          kind === "loc" ? "어디로 가고 싶으세요?" : "언제 가시나요?"
        }
      />
    </Wrapper>
  );
}
