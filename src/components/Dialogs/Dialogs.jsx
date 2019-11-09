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

let dialogsData = [
    {id: 1, name: "Dimuch"},
    {id: 2, name: "Vlad"},
    {id: 3, name: "Grow"},
    {id: 4, name: "Victor"},
    {id: 5, name: "Farid"},
    {id: 6, name: "Vitalik"},
    {id: 7, name: "Alex"},
];

let messageData = [
    {id:1, messsage: 'Hi Test'},
    {id:2,messsage: 'Why Test'},
    {id:3,messsage: 'Do Test'},
];

let dialogs = dialogsData.map((newDialogs) =>{
    return <li><DialogItem name={newDialogs.name} id={newDialogs.id}/></li>
});

let messages = messageData.map((newMessage)=>{
    return <MessageItem message={newMessage.messsage} id={newMessage.id}/>
});


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <h3>DIALOGS</h3>
                <ul>
                    {dialogs}
                </ul>
            </div>
            <div className={classes.messages}>
                <h3>MESSAGES</h3>
                {messages}
            </div>
        </div>

    );
};

export default Dialogs;