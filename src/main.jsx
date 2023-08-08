import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import App from './App.jsx'
import Root from "./routes/root";
import './index.css'
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
// import { checkRespond } from './res/API';
// import Root, { loader as rootLoader } from "./routes/root";


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Root/>,
    errorElement: <ErrorPage />,
    // loader: () => {
    //   return checkRespond();
    // },
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
