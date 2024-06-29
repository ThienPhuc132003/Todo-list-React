// Assuming this is the Button component's structure
function Button({ handleActive, children, ...props }) {
  return (
    <button onClick={handleActive} {...props}>
      {children}
    </button>
  );
}
export default Button;
