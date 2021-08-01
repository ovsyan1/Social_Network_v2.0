import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
      // <App posts={state.posts} dialogs={state.dialogs} messages={state.messages}/>,
      <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>,
    document.getElementById('root')
  );
  }



rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);


reportWebVitals();
