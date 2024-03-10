import classes from "./Counter.module.css";
// import { Component } from "react";
import { useSelector, useDispatch /*connect*/ } from "react-redux";
import { counterAction } from "../store/counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter); //? extract data from the Redux store state.
  //? It's a React hook that gives you access to the Redux store's state without having to subscribe to the entire store.
  const show = useSelector((state) => state.counter.showCounter);
  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });
    dispatch(counterAction.toggleCounter());
  };
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterAction.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: "INCREASE", amount: 5 });
    dispatch(counterAction.increase(5));
  };

  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => ({ counter: state.counter });
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({ type: "INCREMENT" }),
//   decrement: () => dispatch({ type: "DECREMENT" }),
// });
// //? connect is a higher order function that will return a function, then that function will take COMPONENT as argument.
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
