const Button = ({ name,style }) => {
  return (
    <>
      <button className={`${style} ? ${style} : bg-purple-600 text-white h-10 px-4 rounded-md capitalize font-semibold`}>
        {name}
      </button>
    </>
  );
};
export default Button;
