import React from 'react';
import style from './AlertBox.module.css'

const AlertBox = (props) => {
    let isValid = true;

    if(props.msg.alertMsg==="" || props.msg.alertMsg===undefined){
        isValid = true;
    }
    else{
        isValid = false;
    }

    return(
          <div className={`${style.main_alert_box} ${!isValid && style.invalid}`}>
            <div className={style.alert_box_top}>{props.msg.alertHead}</div>
            <div className={style.alert_box_down}>
                <p>{props.msg.alertMsg}</p>
            </div>
            <div className={style.alert_box_button}>
                <button>Okay</button>
            </div>
          </div>
    )
}

export default AlertBox;

