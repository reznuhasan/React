import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Layout/Root"
import Home from "./Pages/Home"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
         {
          path:"/",
          element:<Home/>
         }
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
