import React from 'react'
import './App.css';
import Home from './usercomponent/Home'
import Navbar from './usercomponent/Navbar'
import Duapage from './usercomponent/Duapage'
import Quran from './usercomponent/Quran'
import Nav from './usercomponent/Nav';
import Prayertime from './usercomponent/Prayertime'
import AddDua from './Admincomponent/AddDua'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShowDua from './Admincomponent/ShowDua';
import Namaztime from './Admincomponent/Namaztime';
import ShownTime from './Admincomponent/ShownTime';
import Quotes from './Admincomponent/Quotes';
import ShowQuotes from './Admincomponent/ShowQuotes';
import Authpage from './Admincomponent/Authpage';
import Surehmulk from './usercomponent/Qcomponent/Surehmulk';
import Surehyaseen from './usercomponent/Qcomponent/Surehyaseen';
import Surehjuma from './usercomponent/Qcomponent/Surehjuma';
import Kul from './usercomponent/Qcomponent/Kul';
import Adminhome from './Admincomponent/Adminhome';
import Signup from './Admincomponent/Signup';
import Login from './Admincomponent/Login';
import Profile from './usercomponent/Qcomponent/Profile';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "quran",
      element: <><Nav/><Quran/><Navbar/></>
    },
    {
      path: "prayertime",
      element: <><Prayertime/><Navbar/></>
    },
    {
      path:"duapage",
      element:<><Duapage/><Navbar/></>
    },
    {
      path:"Adminhome",
      element:<><Adminhome/></>
    },
    
    {
      path:"Authpage",
      element:<><Authpage/></>
    },
    {
      path:"Surehmulk",
      element:<><Surehmulk/><Navbar/></>
    },
    {
      path:"surehyaseen",
      element:<><Surehyaseen/><Navbar/></>
    },
    {
      path:'surehjuma',
      element:<><Surehjuma/><Navbar/></>
    },
    {
      path:"kul",
      element:<><Kul/><Navbar/></>
    },
    {
      path:'signup',
      element:<><Signup/></>
    },
    {
      path:'login',
      element:<><Login/></>
    },
    {
      path:'profile',
      element:<><Profile/></>
    }
    
    ]);
  


  return (
    <div className=''>
          <RouterProvider router={router}/>

      {/* <Home/> */}
      
    </div>
  )
}

export default App
