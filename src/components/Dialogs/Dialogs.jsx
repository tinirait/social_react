import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {


    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));

    };


    let dialogs = state.dialogsData.map((newDialogs) => {
        return <DialogItem name={newDialogs.name} id={newDialogs.id}/>
    });

    let messages = state.messageData.map((newMessage) => {
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
                <div>{messages}</div>
                <div className={classes.textAreaMessage}>
                    <textarea onChange={onNewMessageChange}  placeholder='What did you say?' value={state.newMessageBody}/>
                </div>
                <div className={classes.buttonPosition}>
                    <div>
                        <button onClick={onSendMessageClick} className={classes.buttom}>Add Post</button>
                    </div>
                    <div>
                        <button className={classes.buttom}>Remove Post</button>
                    </div>
                </div>
            </div>

            <div className={classes.messages}>
                <h3>MESSAGES FROM 2 FRIEND</h3>
                {messages}
            </div>

        </div>

    );
};

export default Dialogs;