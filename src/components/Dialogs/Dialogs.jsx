import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.itemsName + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    );
};

const MessageItem = (props) => {
    return (
        <div className={classes.itemsMessage}>{props.message}</div>
    );
};


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Dimuch" id="1"/>
                <DialogItem name="Vlad" id="2"/>
                <DialogItem name="Victor" id="3"/>
                <DialogItem name="Farid" id="4"/>
                <DialogItem name="Vitalik" id="5"/>
                <DialogItem name="Alex" id="6"/>
            </div>
            <div className={classes.messages}>
                <MessageItem message="Hi Test?"/>
                <MessageItem message="Why Test?"/>
                <MessageItem message="Do Test?"/>
            </div>
        </div>

    );
};

export default Dialogs;