import React, { useState, } from "react";
import style from "./UserForm.module.css";

const UserForm = (props) => {
//   const UserName = useRef();
//   const UserAge = useRef();



  const [UserName, setUserName] = useState("");
  const [UserAge, setUserAge] = useState("");

  const onChangeUserName = (event) => {
    event.preventDefault();
    setUserName(event.target.value.trim());
  };

  const onChangeUserAge = (event) => {
    event.preventDefault();
    setUserAge(event.target.value);
  };

  const onClickBtn = (event) => {
    event.preventDefault();
    // console.log(UserAge.current.value);
    const alert = {
      alertHead: "",
      alertMsg: "",
    };
    if (UserName.length <= 0) {
      alert.alertHead = "Invalid Name";
      alert.alertMsg = "Plese Enter Username... It can't be empty!";
    } else if (UserAge.length <= 0 || +UserAge < 1) {
      alert.alertHead = "Invalid Age";
      alert.alertMsg =
        "Plese Enter Valid Age... It can't be less than equal to ZERO!";
    }
    const user = {
      id: Math.random().toString(),
      name: UserName,
      age: UserAge,
      msg: alert,
    };
    console.log(user);
    props.formData(user);
    setUserName("")
    setUserAge("")
  };

  return (
    <div className={style.main_user_box}>
      <div className={style.user_input_box}>
        <label>Username</label>
        <input 
        type="text" 
        onChange={onChangeUserName} 
        value={UserName} 
        // ref={UserName}
        />
        <label>Age=(Years)</label>
        <input 
        type="number" 
        onChange={onChangeUserAge} 
        value={UserAge} 
        // ref={UserAge}
        />
      </div>
      <div className={style.user_button_box}>
        <button onClick={onClickBtn}>Add User</button>
      </div>
    </div>
  );
};

export default UserForm;
