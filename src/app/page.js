"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const[toggle,setToggle] = useState(true)
  return (
    <>
      <Navbar onclick={()=>setToggle(!toggle)}/>
      {toggle && <Sidebar/>}
    </>
  );
};
export default Page;
