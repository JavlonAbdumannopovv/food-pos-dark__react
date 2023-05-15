import React, { useState } from "react";
import {
  Container,
  Primary,
  Header,
  User,
  UserName,
  UserDate,
  Search,
  Category,
  Title,
  Foods,
  FoodsHeader,
  FoodsTitle,
  Sort,
  FoodsMain,
} from "./HomeElements";
import Food from "../Food/Food";
import { titles, foods } from "../../data/data";

const Home = () => {
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
  const [foodsData, setFoodsData] = useState(foods.data);
  const [activeType, setActiveType] = useState("Hot Dishes");
  const [titlesData, setTitlesData] = useState(titles);

  const clickTitleHandler = (name, key) => {
    setTitlesData((prevItems) => {
      const updatedItems = [...prevItems];
      const changedItems = updatedItems.map((item)=> {
        if (item.name === name) {
          return(
            {
              ...item, 
              active: true,
            }
          )
        } else {
          return(
            {
              ...item, 
              active: false,
            }
          )
        }
      })
      return changedItems;
    });
    setActiveType(name);
  };

  return (
    <Container>
      <Primary>
        <Header>
          <User>
            <UserName>Jaegar Resto</UserName>
            <UserDate>Tuesday, 2Feb 2021</UserDate>
          </User>
          <Search>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              style={inputStyle}
              type="search"
              placeholder="Search for food, coffe, etc.."
            />
          </Search>
        </Header>
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
          <FoodsHeader>
            <FoodsTitle>Choose Dishes</FoodsTitle>
            <Sort>
              <i className="fa-sharp fa-solid fa-chevron-down"></i> Dine in
            </Sort>
          </FoodsHeader>
          <FoodsMain>
            {foodsData.map((food) => {
              if (food.type.includes(activeType)) {
                return (
                  <div key={food.id}>
                    <Food
                      id={food.id}
                      img={food.img}
                      name={food.name}
                      price={food.price}
                      bowl={food.bowl}
                    />
                  </div>
                );
              }
              return null;
            })}
          </FoodsMain>
        </Foods>
      </Primary>
    </Container>
  );
};

export default Home;
