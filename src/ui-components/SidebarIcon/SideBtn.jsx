const SideBtn = ({ Icon, heading ,active}) => {
  return (
    <>
      <div className={` rounded-md  h-10 flex items-center mt-3 pl-4 ${active ? "bg-gray-200":""} hover:bg-slate-100`}>
        <Icon />
        <h1 className="pl-2">{heading}</h1>
      </div>
    </>
  );
};
export default SideBtn;
