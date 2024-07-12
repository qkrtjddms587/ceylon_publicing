import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  .recommend__title {
    @media (max-width: 1000px) {
      font-size: 29px;
    }
    display: flex;
    gap: 1vw;
    font-size: 3vw;
    font-weight: 300;
    .strong__title {
      font-weight: 700;
    }
  }
  .recommend__subtitle {
    @media (max-width: 1000px) {
      font-size: 16px;
    }
    font-size: 1.2vw;
    color: rgba(119, 119, 119, 1);
    letter-spacing: 0;
  }
`;

interface RecommendHeaderProps {
  title: string[];
  subtitle: string;
}

export default function RecommendHeader({
  title,
  subtitle,
}: RecommendHeaderProps) {
  return (
    <Wrapper>
      <div className="recommend__title">
        <span>{title[0]}</span>
        <span className="strong__title">{title[1]}</span>
      </div>
      <span className="recommend__subtitle">{subtitle}</span>
    </Wrapper>
  );
}
