"use client"

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
const Layout = ({children}) => {
  const[toggle,setToggle] = useState(true)

  return (
    <>
      <Navbar onclick={()=>setToggle(!toggle)}/>
      <div className="flex">
      {toggle && <Sidebar/>}
       {children}

      </div>
    </>
  )
};
export default Layout;