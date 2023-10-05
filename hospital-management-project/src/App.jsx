import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from "./Layout/Root"
import Home from "./Pages/Home"
import Doctors from "./Pages/Doctors"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      children:[
         {
          path:"/",
          element:<Home/>
         },
         {
          path:"/doctors",
          element:<Doctors/>
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
