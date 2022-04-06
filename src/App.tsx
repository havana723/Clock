import React, { useEffect, useState } from "react";
import "./App.css";

const Clock: React.FC = () => {
  const [state, setState] = useState<Date>(new Date());
  const hour = state.getHours().toString().padStart(2, "0");
  const minute = state.getMinutes().toString().padStart(2, "0");
  const second = state.getSeconds().toString().padStart(2, "0");

  useEffect(() => {
    const interval = setInterval(() => {
      setState(new Date());
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hour}:{minute}:{second}
    </>
  );
};

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

export default App;
