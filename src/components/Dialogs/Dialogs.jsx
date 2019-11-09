import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = props.dialogsData.map((newDialogs) => {
        return <li><DialogItem name={newDialogs.name} id={newDialogs.id}/></li>
    });

    let messages = props.messageData.map((newMessage) => {
        return <MessageItem message={newMessage.messsage} id={newMessage.id}/>
    });

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