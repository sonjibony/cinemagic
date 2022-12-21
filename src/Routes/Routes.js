import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import ShowDetails from "../Pages/Home/ShowDetails";

 const routes = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children:[{
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')

    },
    {
path: '/showDetails/:id',
element: <ShowDetails></ShowDetails>,
    }]
}
])

export default routes;