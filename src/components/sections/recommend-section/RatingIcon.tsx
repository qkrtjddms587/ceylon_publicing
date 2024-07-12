import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .empty__star .filled__star {
    width: 100%;
    height: 100%;
  }
  .empty__star {
    position: absolute;
    top: 0;
    left: 0;
    fill: rgba(119, 119, 119, 1);
  }
  .filled__star {
    position: absolute;
    top: 0;
    left: 0;
    fill: rgba(252, 196, 0, 1);
    z-index: 2;
  }
`;

export default function RatingIcon({ filled }: { filled: number }) {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="empty__star"
      >
        <path
          stroke="none"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="filled__star"
        style={{
          clipPath: `polygon(0 0, ${filled}% 0, ${filled}% 100%, 0 100%)`,
        }}
      >
        <path
          strokeWidth="1.5"
          stroke="rgba(252, 196, 0, 1)"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        />
      </svg>
    </Wrapper>
  );
}
