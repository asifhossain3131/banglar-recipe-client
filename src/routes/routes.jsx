import {
    createBrowserRouter
  } from "react-router-dom"
import Main from "../layouts/Main"
import Home from "../pages/public/home/Home"
import Login from "../pages/public/user/Login"
import Register from "../pages/public/user/Register"
import Blog from "../pages/public/Blog"
import ChefRecipes from "../pages/private/chefs recipes/ChefRecipes"
import PrivateRoutes from "../pages/private/private route/PrivateRoutes"
import ErrorPage from "../pages/shared/ErrorPage"

const routes=createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
path:'/chefRecipe/:id',
element:<PrivateRoutes><ChefRecipes></ChefRecipes></PrivateRoutes>,
loader:({params})=>fetch(`https://chef-recipe-server-asifhossain3131.vercel.app/chefRecipes/${params.id}`)
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