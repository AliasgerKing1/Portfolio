import React from 'react'
import {useRoutes} from "react-router-dom"
import Home from '../components/pages/Home/Home';
import Error404 from '../components/pages/Error404/Error404';
import Service from '../components/pages/Service/Service';
const PortfolioRoutes = () => {

const router = useRoutes([

    {
        path : "/",
        element: <Home/>
      },
    {
        path : "services",
        element: <Service/>
      },
{
path : "*",
element: <Error404 />
},
])
return (router);
}

export default PortfolioRoutes