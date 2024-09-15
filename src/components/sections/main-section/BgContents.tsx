import { styled } from "styled-components";

interface BgContentsProps {
  title: string;
  subtitle: string;
  mobileTitle: string;
  mobileSubtitle: string;
}

const Wrapper = styled.div`
  display: flex;
  color: white;
  margin-top: 22vw;
  margin-left: 2.5vw;
  .web__wrapper {
    @media (max-width: 1000px) {
      display: none;
    }
    display: flex;
    flex-direction: column;
    gap: 1vw;
    .title {
      font-size: 3vw;
      font-weight: 700;
    }
    .subtitle {
      font-size: 1.5vw;
    }
  }
  .mobile__wrapper {
    display: none;
    @media (max-width: 1000px) {
      letter-spacing: -1px;
      display: flex;
      flex-direction: column;
      gap: 0.7em;
      margin-top: 9em;
      .mobile__title {
        font-size: 2rem;
        font-weight: 700;
      }
      .mobile__subtitle {
        width: 75%;
        font-size: 1rem;
        line-height: 1.6;
      }
    }
  }
`;

export default function BgContents({
  title,
  subtitle,
  mobileTitle,
  mobileSubtitle,
}: BgContentsProps) {
  return (
    <Wrapper>
      <div className="web__wrapper">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </div>
      <div className="mobile__wrapper">
        <span className="mobile__title">{mobileTitle}</span>
        <span className="mobile__subtitle">{mobileSubtitle}</span>
      </div>
    </Wrapper>
  );
}
