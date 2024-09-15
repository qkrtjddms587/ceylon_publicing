import { styled } from "styled-components";
import memberImg from "../../images/member.jpg";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
  .join__image__wrapper {
    @media (max-width: 500px) {
      width: 100%;
    }
    width: 60%;
    aspect-ratio: 2;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .join__info__wrapper {
    @media (max-width: 500px) {
      width: 100%;
      height: 227px;
    }
    width: 40%;
    background-color: rgba(36, 167, 212, 1);
    position: relative;
  }
  .join__info {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate3d(-50%, -50%, 0);
    @media (max-width: 500px) {
      width: 80%;
      button {
        margin-left: auto;
      }
    }
    width: 70%;
    span {
      @media (max-width: 500px) {
        font-size: 25px;
        letter-spacing: -3px;
      }
      font-size: 2.5vw;
      font-weight: 700;
    }
    p {
      margin-top: 2vw;
      font-size: 1.2vw;
      font-weight: 400;
      width: 70%;
      @media (max-width: 500px) {
        width: 100%;
        letter-spacing: 0;
        font-size: 13px;
        margin-top: 15px;
      }
    }
    .detail__btn {
      padding: 1vw 2vw;
      display: flex;
      align-items: center;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 1);
      border-radius: 5px;
      font-size: 1.2vw;
      color: rgba(254, 254, 254, 1);
      margin-top: 4vw;
      @media (max-width: 500px) {
        font-size: 13px;
        padding: 10px 20px;
      }
      svg {
        @media (max-width: 500px) {
          height: 15px;
          margin-bottom: 1px;
        }
        height: 1.4vw;
        margin-left: 3vw;
        margin-bottom: 0.5px;
      }
    }
  }
`;

export default function JoinSection() {
  return (
    <Wrapper>
      <div className="join__image__wrapper">
        <img src={memberImg} alt="temp" />
      </div>
      <div className="join__info__wrapper">
        <div className="join__info">
          <span>실론투어 멤버가 되다</span>
          <p>
            회원들께는 할인된 회원 요금, 현금화해서 사용가능한 포인트 적리브
            무료숙박 같은 다양한 외원 혜택을 누릴 수 있습니다.
          </p>
          <button className="detail__btn">
            자세히 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
