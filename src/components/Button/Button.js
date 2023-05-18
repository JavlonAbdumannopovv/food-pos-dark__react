import React from "react";
import { Button1 } from "./ButtonElements";

const Button = ({ name, width, height, active }) => {
  const style = {
    width: width,
    height: height,
    background: `${active ? "#EA7C69" : "#1F1D2B"}`,
    border: `1px solid ${active ? "#EA7C69" : "#393C49"}`,
    borderRadius: "8px",
    cursor: "pointer",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "140%",
    color: `${active ? "#fff" : "#EA7C69"}`,
    boxShadow: `${
      active
        ? " 0px 8px 24px rgba(234, 124, 105, 0.3)"
        : " 0px 8px 24px transparent"
    }`,
    transition: "all .4s ease",
  };

  return <Button1 style={style}>{name}</Button1>;
};

export default Button;
