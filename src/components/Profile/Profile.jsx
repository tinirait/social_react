import React from 'react';
import classes from'./Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://images.wallpaperscraft.ru/image/abstraktsiya_kvadraty_bliki_110580_2560x1080.jpg"
                    alt="Test"/>
            </div>

            <div>Ava+description</div>
             <MyPosts/>
        </div>
    );
};

export default Profile;