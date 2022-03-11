import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost, updateTextPost } from './redux/state.js';
import { BrowserRouter } from 'react-router-dom';
export function renderDomTree(state) {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} updateTextPost={updateTextPost} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
