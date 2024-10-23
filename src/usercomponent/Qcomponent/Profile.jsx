import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

function Profile() {
  return (
    <div className='w-full h-screen'>
      <nav className="w-full h-10 mb-16 sm:mb-0 bg-gray-300">
         <h1 className="text-xl p-1">
           <FaArrowLeftLong className="inline mx-4" />
           My Profile
         </h1>
       </nav>
       <div className="flex flex-col gap-4 sm:gap-20 sm:flex-row-reverse justify-center items-center w-full h-[90%]">
       <div className=' sm:w-1/3 m-1 sm:py-8 py-0 px-4 w-full sm:h-[80%] flex sm:flex-col'>
           <div className="sm:w-[280px] w-[120px] h-[120px] sm:h-[75%]">
       <img src="https://images.unsplash.com/photo-1689598797204-c584f52a5ad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbiUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Profile" className="w-full h-full object-cover rounded" />
      </div>
        <div className="flex gap-3 my-8 sm:my-0 p-2 w-1/2 h-full ">
         <i className="text-2xl cursor-pointer w-12 flex items-center justify-center h-12 bg-red-200  rounded-md">
            <AiOutlineCloudUpload />
         </i>
         <i className="text-2xl cursor-pointer w-12 flex items-center justify-center h-12 bg-red-200  rounded-md">
            <MdDeleteOutline />
         </i>
       </div>

       </div>
        <div className=' p-3 sm:w-1/3 w-full h-[80%]'>
        <div className='flex sm:flex-row flex-col gap-1'>
             <div className="w-full md:w-1/2">
           <label htmlFor="firstName" className="block mb-1">First Name</label>
           <input
            type="text"
            id="firstName"
            className="border w-full p-1 bg-slate-50 rounded-md"
            placeholder="Mohammed"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="lastName" className="block mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="border w-full p-1 bg-slate-50 rounded-md"
            placeholder="Hussain"
          />
        </div>
        </div>
               <div className="flex flex-col gap-2">
         <div>
          <label htmlFor="field1" className="block mb-1">Field 1</label>
           <input
            type="text"
            id="field1"
            className="border w-full p-1 bg-slate-50 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="field2" className="block mb-1">Field 2</label>
          <input
            type="text"
            id="field2"
            className="border w-full p-1 bg-slate-50 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="field3" className="block mb-1">Field 3</label>
          <input
            type="text"
            id="field3"
            className="border w-full p-1 bg-slate-50 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="field3" className="block mb-1">Field 3</label>
          <input
            type="text"
            id="field3"
            className="border w-full p-1 bg-slate-50 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="field3" className="block mb-1">Field 3</label>
          <input
            type="text"
            id="field3"
            className="border w-full p-1 bg-slate-50 rounded-md"
          />
        </div>
        <button className="bg-black w-full  text-white py-2 rounded-md mt-4 hover:bg-gray-800">
          Save Changes
        </button>
      </div>

      </div>

        </div>
      </div>
  )
}

export default Profile
