import React from "react";

function Button({
  bgColor,
  textColor,
  textSize,
  paddingX,
  paddingY,
  border,
  children,
}) {
  return (
    <button
      className={`${bgColor} ${textColor} ${textSize} ${paddingX} ${paddingY} ${border}  rounded`}
    >
      {children}
    </button>
  );
}

export default Button;
