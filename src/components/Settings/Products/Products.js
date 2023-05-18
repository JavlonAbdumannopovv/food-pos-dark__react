import React, { useState } from "react";
import { titles, foods } from "../../../data/data";
import plus from "../../../assets/Plus.svg";
import {
  Container,
  Category,
  Title,
  Foods,
  FoodsHeader,
  FoodsTitle,
  Sort,
  FoodsMain,
  NewDish,
  NewDishIcon,
  NewDishTitle,
  Food,
  FoodName,
  FoodPrice,
  FoodBowl,
  Wrapper,
  Edit,
  EditIcon,
  EditTitle,
  ButtonWrapper,
  Button,
  FoodMenu,
  MenuWrapper,
  MenuNameTitle,
  MenuNameInput,
  TypeWrapper,
  State,
  Type,
  MenuItem,
  MenuButtons,
  MenuButton,
} from "./ProductsElements.js";

const Products = () => {
  const iconStyle = {
    width: "20px",
    height: "20px",
    margin: "0 7px 0",
    textDecoration: "none !important",
  };
  const imgStyle = {
    borderRadius: "50%",
    margin: "0 0 16px",
  };
  const inputStyle = {
    border: "none",
    outline: "none",
    background: "transparent",
    padding: "10px",
    width: "220px",
    height: "40px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
  };
  const [activeType, setActiveType] = useState("Hot Dishes");
  const [foodsData, setFoodsData] = useState(foods.data);
  const [titlesData, setTitlesData] = useState(titles);

  const clickTitleHandler = (name, key) => {
    setTitlesData((prevItems) => {
      const updatedItems = [...prevItems];
      const changedItems = updatedItems.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });
      return changedItems;
    });
    setActiveType(name);
  };
  return (
    <Container>
      <FoodsHeader>
        <FoodsTitle>Products Management</FoodsTitle>
        <Sort>
          <i style={iconStyle} className="fa fa-sliders"></i> Manage Categories
        </Sort>
      </FoodsHeader>
      <Category>
        {titlesData.map((title, ind) => {
          return (
            <Title
              key={title.id}
              onClick={() => clickTitleHandler(title.name, ind)}
              style={title.style(title.active)}
            >
              {title.name}
            </Title>
          );
        })}
      </Category>
      <Foods>
        <FoodsMain>
          <NewDish>
            <NewDishIcon>
              <img src={plus} alt="plus" />
            </NewDishIcon>
            <NewDishTitle>Add new dish</NewDishTitle>
          </NewDish>
          {foodsData.map((food) => {
            if (food.type.includes(activeType)) {
              return (
                <Food key={food.id}>
                  <img
                    src={food.img}
                    alt={food.name}
                    width="132px"
                    height="132px"
                    style={imgStyle}
                  />
                  <FoodName>{food.name}</FoodName>
                  <Wrapper>
                    <FoodPrice>${food.price}</FoodPrice> -
                    <FoodBowl>{food.bowl} Bowls</FoodBowl>
                  </Wrapper>
                  <Edit>
                    <EditIcon></EditIcon>
                    <EditTitle>Edit dish</EditTitle>
                  </Edit>
                </Food>
              );
            }
            return null;
          })}
        </FoodsMain>
      </Foods>
      <ButtonWrapper>
        <Button>Discard Changes</Button>
        <Button>Save Changes</Button>
      </ButtonWrapper>
      <FoodMenu>
        <MenuWrapper>
          <MenuNameTitle>Img Url</MenuNameTitle>
          <MenuNameInput>
            <input
              style={inputStyle}
              type="text"
              placeholder="Food img url enter ..."
            />
          </MenuNameInput>
        </MenuWrapper>
        <MenuWrapper>
          <MenuNameTitle>Name</MenuNameTitle>
          <MenuNameInput>
            <input
              style={inputStyle}
              type="text"
              placeholder="Food name enter ..."
            />
          </MenuNameInput>
        </MenuWrapper>
        <TypeWrapper>
          <State>
            <MenuNameTitle>Food State</MenuNameTitle>
            <MenuItem>Hot</MenuItem>
            <MenuItem>Cold</MenuItem>
          </State>
          <Type>
            <MenuNameTitle>Food Type</MenuNameTitle>
            <MenuItem>Soup</MenuItem>
            <MenuItem>Grill</MenuItem>
            <MenuItem>Appetizer</MenuItem>
            <MenuItem>Dessert</MenuItem>
          </Type>
        </TypeWrapper>
        <MenuButtons>
          <MenuButton>Cancel</MenuButton>
          <MenuButton>Add</MenuButton>
          <MenuButton>Edit</MenuButton>
        </MenuButtons>
      </FoodMenu>
    </Container>
  );
};

export default Products;
