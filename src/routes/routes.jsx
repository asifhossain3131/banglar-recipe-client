import {
    createBrowserRouter
  } from "react-router-dom"
import Main from "../layouts/Main"
import Home from "../pages/public/home/Home"
import Login from "../pages/public/user/Login"
import Register from "../pages/public/user/Register"
import Blog from "../pages/public/Blog"

const routes=createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
path:'blog',
element:<Blog></Blog>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        }
    ]
}
])

export default routes