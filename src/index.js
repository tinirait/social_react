import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: 1, name: "Dimuch"},
    {id: 2, name: "Vlad"},
    {id: 3, name: "Grow"},
    {id: 4, name: "Victor"},
    {id: 5, name: "Farid"},
    {id: 6, name: "Vitalik"},
    {id: 7, name: "Alex"},
];

let messageData = [
    {id:1, messsage: 'Hi Test'},
    {id:2,messsage: 'Why Test'},
    {id:3,messsage: 'Do Test'},
];


let postData = [
    {id:1, message:'Hi, how are you?',likescount:"1"},
    {id:2, message:'It s my first step',likescount:"10"},
];





ReactDOM.render(<App dialogsData={dialogsData} messageData = {messageData} postData = {postData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
