import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.itemsName}>
            <div className={classes.avatar + ' ' + classes.active}>
            <img src='http://img.greatlove.ru/article/7/9/8/16798.jpeg' alt=''/>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.activeLink} >{props.name}</NavLink>
        </div>
        </div>
    );
};


export default DialogItem;