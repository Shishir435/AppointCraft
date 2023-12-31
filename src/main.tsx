import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {Provider} from 'react-redux';
import {store} from './app/store.ts';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import BigCalendar from './components/BigCalendar.tsx';
import Layout from './Layout.tsx';
import Search from './components/Search.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <App />
    ),
  },
  {
    path: '/calendar',
    element: (
      <Layout>
        <BigCalendar />
      </Layout>
    ),
  },
  {
    path: '/search',
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
