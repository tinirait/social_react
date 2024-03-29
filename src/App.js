import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs store ={props.store}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
