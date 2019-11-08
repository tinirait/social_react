import React from 'react';
import classes from './avaDescr.module.css'

const AvaDescr = () => {
    return (
        <div className={classes.description}>
            <div className={classes.pict}><img src='https://www.dw.com/image/48516015_303.jpg' alt=''></img></div>
            <div className={classes.textProfilePeople}>
                <h2>Tor</h2>
                <p>Birth:20 january</p>
                <p>City:Alva</p>
                <p>Education:Degry</p>
                <p>Web Site:it-camasutra.com</p>
            </div>
        </div>
    );
};
export default AvaDescr;