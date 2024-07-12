import { styled } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 0.5vw;
  right: 0.5vw;
  background-color: rgba(1, 60, 92, 1);
  width: 4vw;
  height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3vw;
  border-radius: 7px;
`;

export default function DueDateBox({ dueDate }: { dueDate: string }) {
  const getDueDate = (dueDate: string) => {
    const dueDateToDate = new Date(dueDate);
    const currentDate = new Date();
    const timeDiff = dueDateToDate.getTime() - currentDate.getTime();
    const dayCoef = 1000 * 60 * 60 * 24;
    const dateDiff = Math.ceil(timeDiff / dayCoef);
    return dateDiff < 0 ? "종료" : `D-${dateDiff}`;
  };
  return <Wrapper>{getDueDate(dueDate)}</Wrapper>;
}
