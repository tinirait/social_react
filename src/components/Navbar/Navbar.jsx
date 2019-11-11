import React from 'react';
import classes from'./Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
const NavBar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className = {classes.item}>
                <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink></div>
            <div className ={classes.item}>
                <NavLink  to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className ={classes.item}>
                <NavLink  to='/news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className ={classes.item}>
                <NavLink  to='/music' activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className ={classes.item}>
                <NavLink  to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>

            <div className ={classes.item}>
                <Friends friends={props.state.friendsName}/>
            </div>

        </nav>
    );
};

export default NavBar ;