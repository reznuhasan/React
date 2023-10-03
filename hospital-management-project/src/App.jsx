import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Layout/Home"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      children:[

      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
