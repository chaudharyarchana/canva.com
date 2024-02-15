import Button from "@/ui-components/NavbarIcon/Button";
import Computericon from "@/ui-components/NavbarIcon/Computericon";
import Settingicon from "@/ui-components/NavbarIcon/Settingicon";
import Toggleicon from "@/ui-components/NavbarIcon/Toggleicon";
import Bellicon from "@/ui-components/NavbarIcon/Bellicon"
import Profileicon from "@/ui-components/NavbarIcon/Profileicon";

const Navbar = () => {
  return(
    <>
    <div className="flex justify-between px-8 h-20 shadow-md items-center">
      <div className="flex">
        <Toggleicon />
        
      </div>
      <div className="flex w-1/4 justify-evenly items-center ">
        <Computericon />
        <Settingicon />
        <Bellicon />
        <Button name="create design"/>
        <Profileicon/>
      </div>

    </div>
    
    </>
  );
};
export default Navbar;