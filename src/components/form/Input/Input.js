import React from "react";
import classes from "./Input.css";
import 'react-dates/initialize';
import moment from 'moment';
import { DateRangePicker, isInclusivelyAfterDay } from 'react-dates';


const Input = props => {
  let inputElem = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "url":
      inputElem = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}  
        />
      );
      break;

    //in case you want to add other input types like textarea etc...

    case "textArea":
      inputElem = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    default:
      inputElem = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.Label}</label>
      {inputElem}
    </div>
  );
};

export default Input;
