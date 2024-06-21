import { Button } from "@mui/material";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement(){
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }

  const { height } = useSpring({
    height: `${count}%`,
    config: { tension: 120, friction: 30 },
  });

  return (
    <div className="counter">
    <div className="counter-Container">
      <h1>{count}</h1>
      <h1>Counter</h1>
      <div className="counter-buttons-container">
        <Button
          variant="outlined"
          color="primary"
          sx={{
            '&:hover': {
              backgroundColor: "white",
            },
          }}
          onClick={increment}
        >
          +
        </Button>
        <Button variant="outlined" color="primary" onClick={reset}      sx={{
            '&:hover': {
              backgroundColor: "white",
            },
          }}>
          Reset
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            '&:hover': {
              backgroundColor: "white",
            },
          }}
          onClick={decrement}
        >
          -
        </Button>
      </div>
      <animated.div
        className="background-colored-div"
        style={{ height }}
      ></animated.div>
     </div>
    </div>
  );
}

export default Counter;
