import React from 'react';
import classes from './ProfileInfo.module.css'
import img from "../img/it_camasutra.png";

const ProfileInfo = (props) => {

    return (
        <div className={classes.mainImage}>
        <img src={img} alt="Test"/>
        <div className={classes.description}>
            <div className={classes.pict}><img src='https://www.dw.com/image/48516015_303.jpg' alt='test'></img></div>
            <div className={classes.textProfilePeople}>
                <h2>{props.nam}</h2>
                <p>Birth: {props.birth}</p>
                <p>City: {props.cityes}</p>
                <p>Education: {props.education}</p>
                <p>Web Site: {props.webSite}</p>
            </div>
        </div>
        </div>
    );
};
export default ProfileInfo;