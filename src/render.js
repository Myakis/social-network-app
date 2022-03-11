import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addMessage, addPost, updateTextMessage, updateTextPost } from './redux/state.js';
import { BrowserRouter } from 'react-router-dom';
export function renderDomTree(state) {
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
}
