import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { addMessage, addPost, subscribe, updateTextMessage, updateTextPost } from './redux/state.js';

let renderDomTree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          updateTextPost={updateTextPost}
          updateTextMessage={updateTextMessage}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

renderDomTree(state);
subscribe(renderDomTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
