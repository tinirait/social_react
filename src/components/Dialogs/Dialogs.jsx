import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.itemsName + ' ' + classes.active}>Dima</div>
                <div className={classes.itemsName}>Vlad</div>
                <div className={classes.itemsName}>Victor</div>
                <div className={classes.itemsName}>Farid</div>
                <div className={classes.itemsName}>Vitalik</div>
                <div className={classes.itemsName}>Alex</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.itemsMessage}>Hi test?</div>
                <div className={classes.itemsMessage}>Why test?</div>
                <div className={classes.itemsMessage}>Yo test?</div>

            </div>
        </div>

    );
};

export default Dialogs;