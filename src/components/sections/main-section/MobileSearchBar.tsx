import { styled } from "styled-components";
import MobileSearchBtn from "./search-bar/MobileSearchBtn";
import MobileSearchInput from "./search-bar/MobileSearchInput";

const Wrapper = styled.form`
  @media (min-width: 1000px) {
    display: none;
  }
  position: absolute;
  top: 55vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45vh;
  .mobile__search__bar__title {
    @media (max-width: 500px) {
      padding: 40px 40px;
    }
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 -7px 5px 0 rgba(0, 0, 0, 0.12);
    position: absolute;
    top: -50px;
    z-index: -1;
    padding: 45px 100px;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 1);
    border-radius: 33px;
    span {
      color: rgba(36, 167, 212, 1);
    }
  }
  .mobile__search__input__wrapper {
    margin: 0 auto;
    width: 85%;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default function MobileSearchBar() {
  return (
    <Wrapper>
      <div className="mobile__search__bar__title">
        <div>
          <span>where</span> do you
        </div>
        <div>
          want to<span> go</span>?
        </div>
      </div>
      <div className="mobile__search__input__wrapper">
        <MobileSearchInput kind="loc" />
        <MobileSearchInput kind="date" />
        <MobileSearchBtn text="Let's go" onClick={() => {}} />
      </div>
    </Wrapper>
  );
}
