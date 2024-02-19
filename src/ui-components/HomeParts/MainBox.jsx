import Image from "next/image";
const MainBox = () => {
    const arr =[]
    for(let i=0;i<4;i++){
        arr[i] = "/img1.webp"
    }
  return (
    <div className="mt-4 flex justify-between mb-10 cursor-pointer" style={{width:"70vw"}}>
   {arr.map((ele) => (
        <div>
         <Image
        src = {ele}
        width={180}
        height={180}
        className="rounded-xl"
        />
     <h1 className="font-semibold text-sm">Doc</h1>

    </div>
   ))}
        
    </div>
  )
};
export default MainBox;