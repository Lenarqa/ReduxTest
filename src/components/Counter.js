import React, { Component } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store";

const Counter = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounterField);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const dicrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "clear" });
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", amound: 5 });
    dispatch(counterActions.increase(5));
  };

  return (
    <div className={classes.cart}>
      <div className={classes.header}>Redux counter</div>
      {show && <div className={classes.counter}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Incrice by 5</button>
        <button onClick={dicrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </div>
  );
};

export default Counter;

// ---------------------------------------------- ///
/// -------- CLass component example -------------///
// ---------------------------------------------- ///

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   dicrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {
//     this.props.clear();
//   }

//   render() {
//     return (
//       <div className={classes.cart}>
//         <div className={classes.header}>Redux counter</div>
//         <div className={classes.counter}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.dicrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//     clear: () => dispatch({type: "clear"}),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
