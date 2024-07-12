import { styled } from "styled-components";
import RatingIcon from "./RatingIcon";
import { useCallback } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default function RatingBoard({ rating }: { rating: number }) {
  const formatRatingArray = useCallback((rating: number) => {
    const integerPart = Math.floor(rating);
    const fractionalPart = Math.round((rating - integerPart) * 100);

    return new Array(5).fill(0).map((_, i) => {
      if (i < integerPart) {
        return 100;
      }
      if (i === integerPart) {
        return fractionalPart;
      }
      return 0;
    });
  }, []);

  return (
    <Wrapper>
      {formatRatingArray(rating).map((value, idx) => (
        <RatingIcon key={idx} filled={value} />
      ))}
    </Wrapper>
  );
}
