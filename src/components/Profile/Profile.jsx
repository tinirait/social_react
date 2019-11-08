import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import img from './img/it_camasutra.png';
import AvaDescr from "./avaDescr/avaDescr";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src={img}
                    alt="Test"/>
            </div>
            <AvaDescr nam = 'Tor' birth = 'Birth:20 january' cityes = 'City:Alva' education = 'Education:Degry' webSite = 'Web Site: it-camasutra.com'/>
            <MyPosts/>
        </div>
    );
};

export default Profile;