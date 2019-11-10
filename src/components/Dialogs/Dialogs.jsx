import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = props.state.dialogsData.map((newDialogs) => {
        return <DialogItem name={newDialogs.name} id={newDialogs.id}/>
    });

    let messages = props.state.messageData.map((newMessage) => {
        return <MessageItem message={newMessage.messsage} id={newMessage.id}/>
    });

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <h3>DIALOGS</h3>
                    {dialogs}
            </div>
            <div className={classes.messages}>
                <h3>MESSAGES FROM 1 FRIEND</h3>
                {messages}
            </div>

            <div className={classes.messages}>
                <h3>MESSAGES FROM 2 FRIEND</h3>
                {messages}
            </div>

        </div>

    );
};

export default Dialogs;