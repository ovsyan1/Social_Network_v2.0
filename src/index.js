import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state';
import { addPost, updateNewPostText, addMessages, updateNewMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
      // <App posts={state.posts} dialogs={state.dialogs} messages={state.messages}/>,
      <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
      addMessages={addMessages}
      updateNewMessageText={updateNewMessageText}/>
      </BrowserRouter>,
    document.getElementById('root')
  );
  }



rerenderEntireTree(state);

subscribe(rerenderEntireTree);


reportWebVitals();
