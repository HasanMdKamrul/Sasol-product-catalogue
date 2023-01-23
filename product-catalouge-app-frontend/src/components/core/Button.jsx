const Button = ({ children, handleButton }) => {
  return (
    <>
      <button onClick={handleButton} className="btn btn-outline w-full my-2">
        {children}
      </button>
    </>
  );
};

export default Button;
