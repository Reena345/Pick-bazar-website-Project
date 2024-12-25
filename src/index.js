import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import LoginPage from './Components/Forms/LoginPage/LoginPage';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';


const router =createBrowserRouter([
    {
       
        path:'/',
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<App/>
            },
            {
                path:'/LoginPage ',
                element: <LoginPage />
            },
            {
                path:'/ProductsDetails/:id',
                element:<ProductsDetails/>
            },
            
             


        ]
    },  
   
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
 
    
  
);






