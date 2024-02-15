const Button = ({ name }) => {
  return (
    <>
      <button className="bg-purple-600 text-white py-2 px-4 rounded-md capitalize font-semibold">
        {name}
      </button>
    </>
  );
};
export default Button;