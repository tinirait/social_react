import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <a href="/">Home</a>
            <a href="/">NewFeeds</a>
            <a href="/">Messages</a>
        </div>
    );
};

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>react</li>
                <li>App</li>
            </ul>
        </div>
    );
};

export default App;
