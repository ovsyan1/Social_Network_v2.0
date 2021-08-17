import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar  from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
      <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer  />}/>
            <Route path="/dialogs" render={() => <DialogsContainer />}/>
            <Route path="/news" render={() => <ProfileContainer store={props.store}/>}/>
            <Route path="/music" render={() => <ProfileContainer store={props.store}/>}/>
            <Route path="/settings" render={() => <ProfileContainer store={props.store}/>}/>
            <Route path="/friends" render={() => <ProfileContainer store={props.store}/>}/>
            <Route path="/users" render={() => <UsersContainer />} />
            {/* <Route path="/dialogs" component={Dialogs}/>
            <Route path="/profile" component={Profile}/>*/}
          </div>
      </div>
  );
}

export default App;
