import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import img from './img/it_camasutra.png';
import AvaDescr from "./avaDescr/avaDescr";

const Profile = () => {
    return (
            <div className={classes.mainImage}>
                <img
                    src={img}
                    alt="Test"/>

            <AvaDescr nam = 'Tor' birth = '20 january' cityes = 'Alva' education = 'Degry' webSite = 'it-camasutra.com'/>
            <MyPosts/>
            </div>

    );
};

export default Profile;