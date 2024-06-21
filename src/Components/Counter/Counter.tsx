import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { setCounterValue } from "./CounterSlice";

function Counter() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.counter.value);

  useEffect(() => {
    setCount(value);
  }, []);

  function updateValue(){
    dispatch(setCounterValue(count));
  }


  function increment() {
    const newCount = count+1
    setCount(newCount)
    dispatch(setCounterValue(newCount));

  }
  function decrement(){
    const newCount = count-1
    setCount(newCount);
    dispatch(setCounterValue(newCount));
  }
  function reset(){
    setCount(0);
    dispatch(setCounterValue(0));
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
