import ReactDOM from "react-dom/client"
import { lazy, Suspense } from "react";
import Service from "./components/Service"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./Layout/AppLayout"
import Error from "./components/Error"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import ProductDetails from "./components/ProductDetails"
import Shimmer from "./components/Shimmer"

const About=lazy(()=>import("./components/About"))
const Instamart = lazy(() => import("./components/Instamart"))
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Service />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/product/:id",
                element: <ProductDetails />
            },
            {
                path: "/instamart",
                element:<Suspense fallback={<Shimmer/>} ><Instamart /> </Suspense>

            }
        ]

    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)