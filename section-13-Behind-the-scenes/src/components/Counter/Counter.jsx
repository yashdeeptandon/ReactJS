import { useState, memo, useCallback, useMemo } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// memo is used to wrap component function to  prevent unnecessary re-renders of the components when props are not changing.
const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);

  // useEffect(() => {
  //   setCounter({ value: initialCount, id: Math.random() * 1000 });
  // }, [initialCount]);

  // useMemo is used to wrap normal functions which are inside component functions
  // useMemo is used in  order to optimize the re-rendering of components when their dependencies change.
  const initialCountIsPrime = useMemo(() => {
    return isPrime(initialCount);
  }, [initialCount]);
  // thus is prime will only be executed if initialCount change not when counter state change.
  const [counter, setCounter] = useState({
    value: initialCount,
    id: Math.random() * 1000,
  });

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prevCounter) => ({
      ...prevCounter,
      value: prevCounter.value - 1,
    }));
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => ({
      ...prevCounter,
      value: prevCounter.value + 1,
    }));
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter.value} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
});

export default Counter;
