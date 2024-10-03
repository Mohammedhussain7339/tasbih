import React from 'react'
import './App.css';
import Home from './usercomponent/Home'
import Navbar from './usercomponent/Navbar'
import Duapage from './usercomponent/Duapage'
import Quran from './usercomponent/Quran'
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "quran",
      element: <><Quran/><Navbar/></>
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
      path:"addDua",
      element:<><AddDua/></>
    },
    {
      path:"showDua",
      element:<><ShowDua/></>
    },
    {
      path:"addNamaz",
      element:<><Namaztime/></>
    },
    {
      path:"showntime",
      element:<><ShownTime/></>
    },
    {
      path:"Quotes",
      element:<><Quotes/></>
    },
    {
      path:"ShowQuotes",
      element:<><ShowQuotes/></>
    },
    
    ]);
  


  return (
    <div className=''>
          <RouterProvider router={router}/>

      {/* <Home/> */}
      
    </div>
  )
}

export default App
