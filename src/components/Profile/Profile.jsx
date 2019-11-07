import React from 'react';
import classes from'./Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import img from './img/it_camasutra.png';
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src={img}
                    alt="Test"/>
            </div>

            <div className={classes.description}>Ava+description</div>
             <MyPosts/>
        </div>
    );
};

export default Profile;