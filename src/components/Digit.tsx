import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface Props {
  digit: string;
  nextDigit: string;
  prevDigit: string;
}

interface DigitProps {
  refresh: boolean;
}

const DigitContainer = styled.div`
  background: #242323;
  color: white;
  width: 60px;
  height: 80px;
  border-radius: 10px;
  position: relative;
`;

const UpDigitContainer = styled.div`
  width: 60px;
  height: 38.5px;
  position: absolute;
  top: 0;
`;

const DownDigitContainer = styled.div`
  width: 60px;
  height: 38.5px;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

const UpDigit = styled.div`
  background: #3b3a3a;
  width: 60px;
  height: 38.5px;
  line-height: 80px;
  text-align: center;
  font-size: 48px;
  position: absolute;
  top: 0;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const DownDigit = styled.div`
  background: #3b3a3a;
  width: 60px;
  line-height: 80px;
  text-align: center;
  font-size: 48px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
`;

const Flip = keyframes`
  from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
`;

const UpDigitNext = styled(UpDigit)<DigitProps>`
  z-index: 8;
  transform-origin: bottom;
  animation: ${({ refresh }) =>
    refresh
      ? css`
          ${Flip} 0.3s
        `
      : css``};
  animation-fill-mode: forwards;
`;

const DownDigitNext = styled(DownDigit)<DigitProps>`
  z-index: 8;
  transform-origin: bottom;
  animation: ${({ refresh }) =>
    refresh
      ? css`
          ${Flip} 0.3s
        `
      : css``};
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
`;

const Digit: React.FC<Props> = (props) => {
  const digit = props.digit;
  const nextDigit = props.nextDigit;
  const prevDigit = props.prevDigit;

  const [flipUp, setFlipUp] = useState<boolean>(true);
  const [flipDown, setFlipDown] = useState<boolean>(true);

  useEffect(() => {
    setFlipUp((prev) => !prev);
    setFlipDown((prev) => !prev);
    setTimeout(() => {
      setFlipUp((prev) => !prev);
    }, 300);
    setTimeout(() => {
      setFlipDown((prev) => !prev);
    }, 400);
  }, [digit]);

  return (
    <>
      <DigitContainer>
        <UpDigitContainer>
          <UpDigitNext refresh={flipUp}>{digit}</UpDigitNext>
          <UpDigit>{nextDigit}</UpDigit>
        </UpDigitContainer>
        <DownDigitContainer>
          <DownDigitNext refresh={flipDown}>
            {flipDown ? digit : digit}
          </DownDigitNext>
          <DownDigit>{nextDigit}</DownDigit>
        </DownDigitContainer>
      </DigitContainer>
    </>
  );
};

export default Digit;
