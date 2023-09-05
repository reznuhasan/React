import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import StudentInfo from "./components/Admission/StudentInfo";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/register",
                element:<StudentInfo/>,
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)