import React from "react";

const Button = ({ name, width, height, active }) => {
  const style = {
    width: width,
    height: height,
    outline: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

    hover: {
      border: "1px solid #EA7C69",
    },
  };

  return <button style={style}>{name}</button>;
};

export default Button;
