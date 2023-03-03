import React from "react";
import style from "./MainLists.module.css";
import ListItem from "./ListItem";

const MainLists = (props) => {
  return (
    <div className={style.main_lists_box}>
      <ul>
        {props.lists.map((user) => (
          <ListItem
            key={user.id}
            name={user.name}
            age={user.age}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainLists;
