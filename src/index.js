import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { message: 'Какое-то сообщение, которое потом будет написано мной для теста ', likeCount: 23, shareCount: 1, id: 1 },
  { message: 'Какое-то сообщение, которое потом будет написано мной для теста 22', likeCount: 223, shareCount: 21, id: 2 },
];
let listUserDialog = [
  {
    id: '1',
    name: 'Андрей',
  },
  {
    id: '2',
    name: 'Леонид',
  },
  {
    id: '3',
    name: 'Алексей',
  },
];

let listMessage = [
  { id: 1, message: 'Привет' },
  { id: 1, message: 'Привет' },
  { id: 1, message: 'Как дела' },
];

ReactDOM.render(
  <React.StrictMode>
    <App post={postData} dialogs={listUserDialog} message={listMessage} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
