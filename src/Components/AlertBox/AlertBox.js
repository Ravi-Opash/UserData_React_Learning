import React, { Fragment } from "react";
import style from "./AlertBox.module.css";
// import ReactDOM from "react-dom";

const AlertBox = (props) => {
  let isValid = true;

  if (props.msg.alertMsg === "" || props.msg.alertMsg === undefined) {
    isValid = true;
  } else {
    isValid = false;
  }

//   const OverLay = (props) => {
//     return (
    
//   )};
  return (
   <Fragment>
    {/* {ReactDOM.createPortal(<OverLay onConfirm={props.onConfirm} />, document.getElementById('overlay'))} */}
    <div className={`${style.main_alert_box} ${!isValid && style.invalid}`}>
    <div className={style.alert_box_top}>{props.msg.alertHead}</div>
    <div className={style.alert_box_down}>
      <p>{props.msg.alertMsg}</p>
    </div>
    <div className={style.alert_box_button}>
      <button onClick={props.onConfirm}>Okay</button>
    </div>
  </div>
   </Fragment> 
  );
};

export default AlertBox;
