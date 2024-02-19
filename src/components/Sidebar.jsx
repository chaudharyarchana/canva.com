import Profileicon from "@/ui-components/NavbarIcon/Profileicon";
import Settingicon from "@/ui-components/NavbarIcon/Settingicon";
import Appicon from "@/ui-components/SidebarIcon/Appicon";
import Homeicon from "@/ui-components/SidebarIcon/Homeicon";
import Plusicon from "@/ui-components/SidebarIcon/Plusicon";
import Projecticon from "@/ui-components/SidebarIcon/Projecticon";
import SideBtn from "@/ui-components/SidebarIcon/SideBtn";
import Trashicon from "@/ui-components/SidebarIcon/Trashicon";
import Bellicon from "@/ui-components/NavbarIcon/Bellicon"
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
    <div className=" pt-5 pl-4 " style={{width:"20vw"}}>
        <div className="flex items-center">
            <Profileicon />
            <h1 className="font-medium text-l text-gray-800 ml-2">Archana Kumari's Team</h1>
        </div>
        <div className="bg-gray-100 justify-around rounded-md font-medium h-10 flex items-center mt-4">
            <h1>Get Canva Pro</h1>
        </div>
       <Link href="/"> <SideBtn Icon={Homeicon} heading="Home" active="true"/> </Link>

        <div className="overflow-y-scroll h-40 mt-3 mb-2 shadow-inner">
        <SideBtn Icon={Projecticon} heading="Projects"/> 
        <SideBtn Icon={Appicon} heading="Apps"/> 
        <SideBtn Icon={Settingicon} heading="Settings"/> 
        <SideBtn Icon={Bellicon} heading="Notifications"/>

        </div>
        <SideBtn Icon={Plusicon} heading="Invite members"/>
        <hr className="mt-2"></hr>
        <SideBtn Icon={Trashicon} heading="Trash"/>
        
    </div>
    </>
  )
};
export default Sidebar;