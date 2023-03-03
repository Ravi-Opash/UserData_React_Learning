import React from 'react';
import style from './ListItem.module.css'

const ListItem = (props) => {

    return(
          <div className={style.user_list_box}>
            <p>{props.name}<span>{' (' + props.age + ')'}</span></p>
          </div>
    )
}

export default ListItem;

