import { styled } from "styled-components";

interface SpotCardProps {
  id: number;
  title: string;
  subtitle: string;
  imagePath: string;
}

const Wrapper = styled.div<{ $imagePath: string }>`
  background-image: url(${({ $imagePath }) => $imagePath}),
    linear-gradient(to top, rgba(0, 0, 0, 0.56), rgba(9, 9, 9, 0));
  background-size: cover;
  border-radius: 7px;
  background-color: transparent;
  padding: 2vw;
  color: white;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  aspect-ratio: 1;
  @media (max-width: 1000px) {
    flex: none;
    width: 268px;
    height: 279px;
    margin-right: 20px;
    padding: 20px;
  }
  span {
    &.spot__title {
      font-size: 2vw;
      font-weight: 900;
      @media (max-width: 1000px) {
        font-size: 2rem;
      }
    }
    &.spot__subtitle {
      font-size: 1vw;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.7);
      @media (max-width: 1000px) {
        font-size: 1rem;
      }
    }
  }
`;

export default function SpotCard({
  title,
  subtitle,
  imagePath,
}: SpotCardProps) {
  return (
    <Wrapper $imagePath={imagePath}>
      <span className="spot__subtitle">{subtitle}</span>
      <span className="spot__title">{title}</span>
    </Wrapper>
  );
}
