import React from "react";
import classes from '../styles/button.module.css'

const Button = (props) => {
  return <button className={`${classes.button}`}>{props.name}</button>;
};

export default Button;
