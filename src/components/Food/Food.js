import React from "react";
import { Container, Content, Name, Price, Bowl } from "./FoodElements";

const Food = ({ id, img, name, price, bowl }) => {
  const imgStyle = {
    borderRadius: "50%",
    margin: "0 0 16px",
  };
  return (
    <Container key={id}>
      <Content>
        <img
          src={img}
          alt={name}
          width="132px"
          height="132px"
          style={imgStyle}
        />
        <Name>{name}</Name>
        <Price>${price}</Price>
        <Bowl>{bowl} Bowls available</Bowl>
      </Content>
    </Container>
  );
};

export default Food;
