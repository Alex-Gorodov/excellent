import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.sass';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { loadOrders, loadUsers } from './store/actions';
import { orders } from './assets/mocks/orders';
import { users } from './assets/mocks/users';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadOrders({orders: orders}))
store.dispatch(loadUsers({users: users}))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
