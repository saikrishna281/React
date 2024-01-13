import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Services from './Components/Services';
import Settings from './Components/Settings';
import Country from './Components/Country';
import Countrydetails from './Components/Countrydetails';

        const Router = createBrowserRouter([
          {
            path:'/',
            element:<App/>,
            children:[
              {
                path:'/aboutus',
                element:<AboutUs/>
              },
              {
                path:'/contactus',
                element:<ContactUs/>
              },
              {
                path:'/services',
                element:<Services/>
              },
              {
                path:'/Settings',
                element:<Settings/>
              },
              {
                path:'/country',
                element:<Country/>,
                children:[
                  {
                    path:'/country/details/:cname',
                    element:<Countrydetails/>

                  }
                ]

              }
            ]
          },
     
         ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <RouterProvider router={Router}>

   </RouterProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
