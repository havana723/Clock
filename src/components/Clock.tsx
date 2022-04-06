import { useEffect, useState } from "react";
import styled from "styled-components";
import Digit from "./Digit";

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SpaceBig = styled.div`
  width: 30px;
`;

const SpaceSmall = styled.div`
  width: 4px;
`;

const Clock: React.FC = () => {
  const [state, setState] = useState<Date>(new Date());
  const hour = state.getHours().toString().padStart(2, "0");
  const minute = state.getMinutes().toString().padStart(2, "0");
  const second = state.getSeconds().toString().padStart(2, "0");
  const time = (hour + minute + second).split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setState(new Date());
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ClockContainer>
        {time.map((d, i) => (
          <>
            <Digit digit={d} />
            {i % 2 ? <SpaceBig /> : null}
            {i % 2 == 0 ? <SpaceSmall /> : null}
          </>
        ))}
      </ClockContainer>
    </>
  );
};

export default Clock;
