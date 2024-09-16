import { styled } from "styled-components";

interface InfoItemsProps {
  benefit: string[];
  roomType: string[];
  locDetail: string[];
}

const Wrapper = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto 2.5vw auto;
  display: grid;
  grid-template-columns: 0.4fr 0.3fr 0.3fr;
  div {
    .item__title {
      display: inline-block;
      color: rgba(0, 0, 0, 1);
      font-size: 1.1vw;
      padding-bottom: 0.25vw;
      margin-bottom: 1.1vw;
      border-bottom: 1px solid rgba(43, 43, 43, 1);
    }
    ul {
      color: rgba(85, 85, 85, 1);
      font-size: 0.8vw;
      line-height: 1.6;
      .map__view__btn {
        margin-top: 1vw;
        width: 10vw;
        height: 2.5vw;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3vw;
        border: 1px solid rgba(47, 47, 47, 1);
        border-radius: 7px;
        cursor: pointer;
        svg {
          width: 1vw;
          height: 1vw;
        }
        span {
          font-size: 0.8vw;
          font-weight: 500;
        }
      }
      li {
        label {
          display: flex;
          gap: 0.7vw;
          margin-bottom: 0.7vw;
        }
        span {
          font-size: 0.9vw;
          line-height: 1;
          font-weight: 300;
          color: rgba(0, 0, 0, 1);
          &.select__room__type {
            font-weight: 600;
          }
        }
        input[type="radio"] {
          -webkit-appearance: none; // 웹킷 브라우저에서 기본 스타일 제거
          -moz-appearance: none; // 모질라 브라우저에서 기본 스타일 제거
          appearance: none; // 기본 브라우저에서 기본 스타일 제거
          width: 1vw;
          height: 1vw;
          border: 1px solid rgba(119, 119, 119, 1); // 체크되지 않았을 때의 테두리 색상
          border-radius: 50%;
          outline: none; // focus 시에 나타나는 기본 스타일 제거
          cursor: pointer;
          margin: 0;
        }
        // 체크 시 버튼 모양 스타일
        input[type="radio"]:checked {
          background-color: rgba(40, 171, 225, 1); // 체크 시 내부 원 색상
          border: 0.25vw solid #fff; // 라인이 아닌, 라인과 원 사이 색상
          box-shadow: 0 0 0 1px rgba(40, 171, 225, 1); // 라인
        }
      }
    }
  }
`;

export default function InfoItems({
  benefit,
  roomType,
  locDetail,
}: InfoItemsProps) {
  return (
    <Wrapper>
      <div>
        <span className="item__title">고객 베네핏</span>
        <ul>
          {benefit.map((item, idx) => (
            <li key={idx}>- {item}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="item__title">룸타입</span>
        <ul>
          {roomType.map((item, idx) => (
            <li key={idx}>
              <label htmlFor={item}>
                <input type="radio" id={item} />
                <span className={idx === 0 ? "select__room__type" : ""}>
                  {item}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span className="item__title">호텔 위치</span>
        <ul>
          {locDetail.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
          <div className="map__view__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span>호텔 위치 보기</span>
          </div>
        </ul>
      </div>
    </Wrapper>
  );
}
