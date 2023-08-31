import ReactDOM  from "react-dom/client";
const { createBrowserRouter, RouterProvider } = require("react-router-dom");
import App from "./App"

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router}/>)