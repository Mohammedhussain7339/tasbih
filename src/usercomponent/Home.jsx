import React, { useState } from 'react'
import Navbar from './Navbar';
import Tasbih from './Tasbih';
import Namaztasbih from './Namaztasbih';
function Home() {
    const [namazTasbih, setNamazTasbih]=useState(<Tasbih/>)
    const namazTasbihHandler=()=>{
        setNamazTasbih(<Namaztasbih/>)

    }
    const tasbihHandler=()=>{
        setNamazTasbih(<Tasbih/>)

    }

  return (
    <>

<div class="w-full h-full bg-gradient-to-t from-darkblue to-100">
    <nav className='bg-darkblue py-3 px-3 text-white text-2xl flex justify-between'>
        <h1>
            Tasbih
        </h1>
        

        <div className='w-10 h-10 rounded-full bg-100'>

        </div>
    </nav>
    <div className='w-full flex justify-evenly'>
    <div className='px-5 py-2 rounded my-2 text-white cursor-pointer text-xl
     w-[180px] text-center bg-200 active:bg-100' onClick={tasbihHandler}>Tasbih</div>
    <div className='px-5 py-2 rounded my-2 text-white cursor-pointer text-xl
     w-[180px] text-center bg-200 active:bg-100'onClick={namazTasbihHandler}> Namaz Tasbihat</div>
    </div>

    {namazTasbih}
        <Navbar/>
    
      
    </div>
    </>
  )
}

export default Home
