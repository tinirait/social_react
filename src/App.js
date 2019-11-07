import React from "react";
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://img2.gratispng.com/20171216/258/fox-png-5a35a82f32c449.143206221513465903208.jpg'
                     alt='Fox'/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='/'>Profile</a>
                </div>
                <div>
                    <a href='/'>Messages</a>
                </div>
                <div>
                    <a href='/'>News</a>
                </div>
                <div>
                    <a href='/'>Music</a>
                </div>
                <div>
                    <a href='/'>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoJamjwVDfdabVrW1Vz4Md3sSAFTMNuynBds_1srQyebuPRTqh"
                        alt="Test"/>
                </div>

                <div>Ava+description</div>
                <div>
                    My posts
                    <div>News Posts</div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>

            </div>
        </div>
    );
};


export default App;
