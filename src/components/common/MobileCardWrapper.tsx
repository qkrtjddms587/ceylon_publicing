import { ReactNode } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  width: 100%;
  position: relative;
  overflow: scroll;
  margin-bottom: 10px;
  overflow-x: hidden;
  .mobile__card__wrapper {
    display: flex;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 20px 0;
    padding-left: 20px;
  }
`;

export default function MobileCardWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Wrapper>
      <div className="mobile__card__wrapper">{children}</div>
    </Wrapper>
  );
}
