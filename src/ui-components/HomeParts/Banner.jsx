import Button from "../NavbarIcon/Button";
import DocsBtn from "./DocsBtn";
import ForYou from "./ForyouBtn";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <>
    <div className=" relative w-full h-60 mt-5 relative bg-gradient-to-r from-blue-500 to-purple-500 mx-8 rounded-md">
        <div className="">
        <h1 className="text-white font-bold text-3xl text-center mt-5">What will you design today ?</h1>
        <div className=" absolute top-3 right-3">
        <Button name="Custom size" style="mr-2 bg-white bg-opacity-10"/>
        <Button name="Upload" style=" bg-white bg-opacity-10"/>
         </div>
     <SearchBar/>
        </div>
        <div className=" absolute bottom-0 left-9" style={{width:"0px",height:"0px",borderBottom:"9px solid white",borderLeft:"8px solid transparent",borderRight:"8px solid transparent"}}></div>
        <div className="mt-7 ml-5 flex w-40 justify-between">
           <ForYou/>
           <DocsBtn/>
        </div>
    </div>
    </>
  )
};
export default Banner;