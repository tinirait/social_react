import React from 'react';
import classes from './Friends.module.css'
import FriendsItems from "./FriendItems/FriendsItems";

const Friends = (props) => {

    let friendsElement = props.friends.map((newFriends) => {
        return <FriendsItems name={newFriends.name}/>;
    });
    return (
        <div className={classes.mainH}>
            <h4>Friends</h4>
            <div className={classes.friendsMain}>
                {friendsElement}
            </div>
        </div>
    );
};

export default Friends;