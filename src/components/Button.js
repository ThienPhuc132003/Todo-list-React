import React  from "react";
function Button(props) {
  const { handleActive, children, ...rest } = props;
  return (
    <button onClick={handleActive} {...rest}>
      {children}
    </button>
  );
}
export default React.memo(Button);
