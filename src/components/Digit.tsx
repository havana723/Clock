import styled from "styled-components";

interface Props {
  digit: string;
}

const DigitContainer = styled.div`
  background: #2f2e2e;
  color: white;
  width: 60px;
  height: 80px;
  border-radius: 10px;
`;

const Digit: React.FC<Props> = (props) => {
  const digit = props.digit;

  return (
    <>
      <DigitContainer>{digit}</DigitContainer>
    </>
  );
};

export default Digit;
