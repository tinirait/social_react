import React from 'react';
import classes from './Posts.module.css';

const Posts = () => {
    return (
        <div className = {classes.item}>
                <img src='http://gamebomb.ru/files/galleries/001/e/e9/307246.jpg'
                    alt='ava'/>
                post 1
                <div>
                <span>like</span>
                </div>
            </div>
    );
};

export default Posts;