import React from 'react';
// import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import AvaDescr from "./avaDescr/avaDescr";

const Profile = () => {
    return (
        <div>
            <AvaDescr nam='Tor' birth='20 january' cityes='Alva' education='Degry' webSite='it-camasutra.com'/>
            <MyPosts/>
        </div>

    );
};

export default Profile;