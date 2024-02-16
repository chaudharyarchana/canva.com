import Searchicon from "./Searchicon";

const SearchBar = () => {
  return (
    <div>
    <div className="w-2/3 mx-auto h-10 mt-8 rounded-md shadow-xl bg-white flex items-center px-3">
       <Searchicon/>
       <input className="w-full focus:outline-none pl-4" placeholder="Search your content on Canva's"/>
    </div>
    </div>
  )
};
export default SearchBar;