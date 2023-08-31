import ReactDOM  from "react-dom/client";
const { createBrowserRouter, RouterProvider } = require("react-router-dom");
import App from "./App"
import CustomError from "./components/CustomError";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";

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
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router}/>)