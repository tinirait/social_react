import React from 'react';
import  classes from'./Header.module.css'
const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://img2.gratispng.com/20171216/258/fox-png-5a35a82f32c449.143206221513465903208.jpg'
                 alt='Fox'/>
        </header>
    );
};

export default Header;