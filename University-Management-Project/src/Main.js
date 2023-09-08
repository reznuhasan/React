import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Layout/App";
import ErrorPage from "./Pages/ErrorPage";
import StudentInfo from "./Pages/StudentInfo";
import Admission from "./Layout/Admission";
import Login from "./Pages/Login";
import ParentInfo from "./Pages/ParentInfo";
import CgpaCounter from "./Pages/CgpaCounter";

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
                path:"/cgpa-calculator",
                element:<CgpaCounter/>
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