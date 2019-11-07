import React from 'react';
import classes from'./Profile.module.css'
const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://images.wallpaperscraft.ru/image/abstraktsiya_kvadraty_bliki_110580_2560x1080.jpg"
                    alt="Test"/>
            </div>

            <div>Ava+description</div>
            <div>
                My posts
                <div>News Posts</div>
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>

        </div>
    );
};

export default Profile;