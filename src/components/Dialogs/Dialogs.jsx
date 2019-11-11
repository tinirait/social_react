import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


const Dialogs = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };


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
                <div className={classes.textAreaMessage}>
                    <textarea ref={newPostElement} placeholder='What did you say?'/>
                </div>
                <div className={classes.buttonPosition}>
                    <div>
                        <button onClick={addPost} className={classes.buttom}>Add Post</button>
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