import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  // render method is just like a return in functional based components.
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
