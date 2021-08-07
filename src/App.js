import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar  from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile />}/>
            <Route path="/dialogs" render={() => <DialogsContainer />}/>
            <Route path="/news" render={() => <Profile store={props.store}/>}/>
            <Route path="/music" render={() => <Profile store={props.store}/>}/>
            <Route path="/settings" render={() => <Profile store={props.store}/>}/>
            <Route path="/friends" render={() => <Profile store={props.store}/>}/>
            <Route path="/users" render={() => <UsersContainer />} />
            {/* <Route path="/dialogs" component={Dialogs}/>
            <Route path="/profile" component={Profile}/>*/}
          </div>
      </div>
  );
}

export default App;
