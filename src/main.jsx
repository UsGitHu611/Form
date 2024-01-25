import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import SignUp from "./components/Sing Up/SignUp.jsx";
import SignIn from "./components/Sign In/SignIn.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/SignUp',
        element: <SignUp/>
    },
    {
        path: '/SignIn',
        element: <SignIn/>
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
