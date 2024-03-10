const redux = require("redux"); // this is a way to import redux library in node
// ? Reducer Function
// assigning default value for the state which handles the case when state is undefined at the first run.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer); //? Creating Store using createStore function from redux library. It takes one argument i.e., our reducer function.

const counterSubscriber = () => {
  //?  Subscribe Function
  const latestState = store.getState(); // default function that returns current state of the application
  console.log(latestState);
};

store.subscribe(counterSubscriber); //? Passing the function as an argument to subscribe it to the store changes.

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
