import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Layout/App";
import ErrorPage from "./components/ErrorPage";
import StudentInfo from "./components/StudentInfo";
import Admission from "./Layout/Admission";
import Login from "./components/Login";
import ParentInfo from "./components/ParentInfo";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/admission",
                element:<Admission/>,
                children:[
                    {
                        path:"/admission",
                        element:<StudentInfo/>
                    },
                    {
                        path:"familyInfo",
                        element:<ParentInfo/>
                    }
                ]
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)