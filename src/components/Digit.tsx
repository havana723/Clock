import styled from "styled-components";

interface Props {
  digit: string;
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
  background: #3b3a3a;
  width: 60px;
  height: 38px;
  position: absolute;
  top: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const DownDigitContainer = styled.div`
  background: #3b3a3a;
  width: 60px;
  height: 38px;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

const UpDigit = styled.div`
  width: 60px;
  line-height: 80px;
  text-align: center;
  font-size: 48px;
  position: absolute;
  top: 0;
`;

const BottomDigit = styled.div`
  width: 60px;
  line-height: 80px;
  text-align: center;
  font-size: 48px;
  position: absolute;
  bottom: 0;
`;

const Digit: React.FC<Props> = (props) => {
  const digit = props.digit;

  return (
    <>
      <DigitContainer>
        <UpDigitContainer>
          <UpDigit>{digit}</UpDigit>
        </UpDigitContainer>
        <DownDigitContainer>
          <BottomDigit>{digit}</BottomDigit>
        </DownDigitContainer>
      </DigitContainer>
    </>
  );
};

export default Digit;
