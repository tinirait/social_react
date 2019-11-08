import React from 'react';
import classes from './avaDescr.module.css'

const AvaDescr = (props) => {

    return (
        <div className={classes.description}>
            <div className={classes.pict}><img src='https://www.dw.com/image/48516015_303.jpg' alt=''></img></div>
            <div className={classes.textProfilePeople}>
                <h2>{props.nam}</h2>
                <p>Birth: {props.birth}</p>
                <p>City: {props.cityes}</p>
                <p>Education: {props.education}</p>
                <p>Web Site: {props.webSite}</p>
            </div>
        </div>
    );
};
export default AvaDescr;