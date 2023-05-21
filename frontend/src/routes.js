import { Navigate, useRoutes } from 'react-router-dom';
import React, { useEffect }  from 'react';
// layouts
import DashboardLayout from './layouts/dashboard';
import DashboardLayout1 from './layouts/userboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Home from './pages/Home';
import ClientLayout from './layouts/client';
import ClientApp from './pages/Client/ClientApp'
import ClientUsers from './pages/Client/ClientUsers';
import ClientProducts from './pages/Client/ClientProducts';
import Drives from './pages/Drives';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { id } from 'date-fns/locale';
import { db } from './firebase';
import Pickup from './pages/Pickup';

import Purchase from './pages/Client/Purchase';
// ----------------------------------------------------------------------

export default function Router() {

  const [user,setUser]=React.useState(JSON.parse( localStorage.getItem('userData')));
  const [userStatus,setuserStatus]=React.useState('ads');


  React.useEffect(()=>{

  const getUserData=async()=>{

    const q = query(collection(db, "users"), where("email", "==", user.email));
    // console.log("Q",q)
    const querySnapShot= await getDocs(q);
    // console.log("querySnapshot",querySnapShot);
    var status="";
    querySnapShot.forEach((doc)=>{
      // console.log("DOC",doc,doc.data());
     status=  doc.data().userstatus
    setuserStatus(status);

    });
    // console.log("Status",status);
    // return status;
    }
    const status= getUserData();
    // setuserStatus(status);
    
  },[])


  // console.log("RouterUserData",user,userStatus, typeof(userStatus));


  return useRoutes([
    {
      path : "/",
      element : <Home/>,
      
    },
    {
      path: '/client',
      element: (user)? ((userStatus)? <ClientLayout />: <NotFound/>) : <Login/>,
      // render={() => <Redirect to="/admin/dashboard" />},
      children: [
        { path: '/client', element: <Navigate to="/client/app" /> },
        { path: 'app', element: <ClientApp /> },
        { path: 'user', element: <ClientUsers/> },
        { path: 'purchase', element: <Purchase/> },
        { path: 'products', element: <ClientProducts /> },
        
      ],
    },

    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [

        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'pickup', element: <Pickup /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'drives', element: <Drives /> }, 
        
        
      ],
    },
    {
      path: '/userboard',
      element: <DashboardLayout1 />,
      children: [

       // { path: 'userpage', element: <User /> },
        
        
        
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
        
        
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
