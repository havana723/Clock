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

  const nextDate = new Date(new Date().getTime() + 1000);
  const nextHour = nextDate.getHours().toString().padStart(2, "0");
  const nextMinute = nextDate.getMinutes().toString().padStart(2, "0");
  const nextSecond = nextDate.getSeconds().toString().padStart(2, "0");
  const nextTime = (nextHour + nextMinute + nextSecond).split("");

  const prevDate = new Date(new Date().getTime() + 1000);
  const prevHour = prevDate.getHours().toString().padStart(2, "0");
  const prevMinute = prevDate.getMinutes().toString().padStart(2, "0");
  const prevSecond = prevDate.getSeconds().toString().padStart(2, "0");
  const prevTime = (prevHour + prevMinute + prevSecond).split("");

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
            <Digit digit={d} nextDigit={nextTime[i]} prevDigit={prevTime[i]} />
            {i % 2 ? <SpaceBig /> : null}
            {i % 2 == 0 ? <SpaceSmall /> : null}
          </>
        ))}
      </ClockContainer>
    </>
  );
};

export default Clock;
