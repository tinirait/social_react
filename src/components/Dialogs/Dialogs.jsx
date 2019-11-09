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


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <h3>DIALOGS</h3>
                <ul>
                    <li><DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/></li>
                    <li><DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/></li>
                    <li><DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/></li>
                    <li><DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/></li>
                    <li><DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/></li>
                    <li><DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/></li>
                    <li><DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/></li>
                </ul>
            </div>
            <div className={classes.messages}>
                <h3>MESSAGES</h3>
                <MessageItem message={messageData[0].messsage} id={messageData[0].id}/>
                <MessageItem message={messageData[1].messsage} id={messageData[1].id}/>
                <MessageItem message={messageData[2].messsage} id={messageData[2].id}/>
            </div>
        </div>

    );
};

export default Dialogs;