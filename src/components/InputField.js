import React from "react";
function InputField(props) {
  const { value, onChange, onBlur, onFocus, onKeyDown, className, ...rest } =
    props;
  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      className={className}
      {...rest}
    />
  );
}

export default React.memo(InputField);
