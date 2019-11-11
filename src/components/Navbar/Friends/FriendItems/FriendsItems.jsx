import React from 'react';
import classes from './FriendsItems.module.css'

const FriendsItems = (props) => {
    return (
        <div className={classes.items}>
            <img src= 'http://img.greatlove.ru/article/7/9/8/16798.jpeg' alt = ''/>
            {props.name}
        </div>
    );
};

export default FriendsItems;