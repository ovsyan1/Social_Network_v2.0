import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar  from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import { addPost } from './redux/state';

function App(props) {

  return (
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            {/* <Route path="/dialogs" component={Dialogs}/>
            <Route path="/profile" component={Profile}/>*/}
            <Route path="/profile" render={() => <Profile 
                                  profilePage={props.state.profilePage} 
                                  addPost={props.addPost}
                                  updateNewPostText={props.updateNewPostText}/>}/>
            <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}
                                    addMessages={props.addMessages}
                                    updateNewMessageText={props.updateNewMessageText}/>}/>
            <Route path="/news" render={() => <Profile profilePage={props.state.profilePage}/>}/>
            <Route path="/music" render={() => <Profile profilePage={props.state.profilePage}/>}/>
            <Route path="/settings" render={() => <Profile profilePage={props.state.profilePage}/>}/>
            <Route path="/friends" render={() => <Profile profilePage={props.state.profilePage}/>}/>
          </div>
      </div>
  );
}

export default App;
