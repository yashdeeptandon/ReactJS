//? 1. importing redux
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./counter";
import authSlice from "./auth";

//? 2. defining reducer function
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     // The objects which we return will not be merged with the state, but will be overwritten.
//     // thus have to pass all the states even if the value is same as before.
//     // always use this method to overwrite the state.
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "TOGGLE") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

//? 3. creating store and passing reducer function to it as argument.
// const store = createStore(counterReducer);

// const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }, //! reducer: {can have multiple reducer functions if there are.}
});

// export default store;

//? 4. implementing subscriber function
// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

//? 5. calling subscribe function and passing the subscriber function as an argument.
// store.subscribe(counterSubscriber);

//? 6. dispatching action
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });



export default store;
