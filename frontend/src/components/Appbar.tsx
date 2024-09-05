import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {

   return  <nav className="bg-white dark:bg-neutral-600 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <Link to={'/blogs'} className="flex items-center space-x-3 rtl:space-x-reverse">
       <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BBlogs</span>
   </Link>
   <div className="space-x-6 flex md:order-2 ">
     <Link to={`/publish`}>
       <button type="button" className=" text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Get started</button>
     </Link>
 
     <Avatar  size={"big"} name="harkirat" />

   </div>

  </div>
 </nav>



  }
