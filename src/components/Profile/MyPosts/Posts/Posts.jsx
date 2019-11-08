import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className = {classes.item}>
                <img src='https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/viacom-Avatar-Sea1-Full-Image_GalleryBackground-en-US-1552014700974._RI_.jpg'
                    alt='ava'/>
                {props.message}
                <div>
                <span>{props.likescount} likes</span>
                </div>
            </div>
    );
};

export default Posts;