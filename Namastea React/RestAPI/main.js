import ReactDOM  from "react-dom/client";
const { createBrowserRouter, RouterProvider } = require("react-router-dom");
import App from "./App"
import CustomError from "./components/CustomError";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Shimmer from "./components/Shimmer";
import { Suspense, lazy } from "react";

const About=lazy(()=>import('./components/About'))
const Contact=lazy(()=>import("./components/Contact"))
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<CustomError/>,
        children:[
            {
                path:"/",
                element:<Countries/>
            },
            {
                path:"/country/:name",
                element:<CountryDetails/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Suspense fallback={<Shimmer/>}><Contact/></Suspense>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router}/>)