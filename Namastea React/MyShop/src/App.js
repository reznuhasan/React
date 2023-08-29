import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Service from "./components/Service"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"
import Error from "./components/Error"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import ProductDetails from "./components/ProductDetails"

const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Service/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/product/:id",
                element:<ProductDetails/>
            }
        ]

    }
])

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router}/>)