import React, { useState } from "react";
import style from "./App.module.css";
import UserForm from "./Components/UserComponents/UserForm";
import MainLists from "./Components/ListComponents/MainLists";
import AlertBox from "./Components/AlertBox/AlertBox";

function App() {
  const UserDataList = [];

  const [updatedList, setUserList] = useState(UserDataList);
  const [alert, setAlert] = useState("");

  const UserEnterdData = (data) => {
    // console.log(data.msg.alertMsg);
    if (data.msg.alertMsg === "" || data.msg.alertMsg === undefined) {
      setUserList(() => {
        return [data, ...updatedList];
      });
    } else {
      setAlert(() => {
        return data.msg;
      });
    }
  };

  return (
    <div className={style.main}>
      <UserForm formData={UserEnterdData} />
      <AlertBox msg={alert} />
      <MainLists lists={updatedList} />
    </div>
  );
}

export default App;
