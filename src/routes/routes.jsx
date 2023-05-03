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
import Menus from "../pages/public/home/category section/Menus"
import About from "../pages/public/About/About"

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
        },
        {
            path:'/menus/:categoryName',
            element:<PrivateRoutes><Menus></Menus></PrivateRoutes>,
            loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`)
        },
        {
            path:'about',
            element:<About></About>
        }
    ]
}
])

export default routes