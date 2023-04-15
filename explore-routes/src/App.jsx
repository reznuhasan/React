
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import Main from './Layouts/Main'
import ProductDetails from './components/ProductDetails/ProductDetails'


function App() {
 const router=createBrowserRouter([
   {
    path:'/',element:<Main></Main>, children:[
      {
        path:'/',element:<Home></Home>
       },
      {
        path:'/home',element:<Home></Home>
       },
       {
        path:'/about',element:<About></About>
       },
       {
        loader :async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        path:'/products',element:<Products></Products>
       },{
        path:'/product/:productId',element:<ProductDetails></ProductDetails>,
        loader: async ({ params }) => {
          console.log(params)
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.productId}`);
        },
       }
    ]
   },{
    path:'*',element:<h3>This Route not Found</h3>
   }
   
  ])
  return (
   <div>
    <RouterProvider router={router}></RouterProvider>
   </div>
  )
}

export default App
