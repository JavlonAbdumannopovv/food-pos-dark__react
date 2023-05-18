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
import Orders from "./Orders/Orders";
import Payment from "./Payment/Payment";

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
  const [styleBack, setStyleBack] = React.useState({
    display: "none",
  });
  const [foodsData, setFoodsData] = useState(foods.data);
  const [activeType, setActiveType] = useState("Hot Dishes");
  const [titlesData, setTitlesData] = useState(titles);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const clickTitleHandler = (name, key) => {
    setSearch("");
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

  const clickFoodHandler = (food) => {
    setIndex((prev) => prev + 1);
    setFoodsData((prev) => {
      const updateData = prev.map((item) => {
        if (item.id === food.id) {
          return { ...item, count: item.count + 1, index: index };
        } else {
          return item;
        }
      });
      return updateData;
    });
  };

  const backFunc = () => {
    return <div className="Back" style={styleBack}></div>;
  };

  const searchFoodHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container>
      {backFunc()}
      <Primary>
        <Header>
          <User>
            <UserName>Jaegar Resto</UserName>
            <UserDate>Tuesday, 2Feb 2021</UserDate>
          </User>
          <Search>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              value={search}
              onChange={searchFoodHandler}
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
            {search === ""
              ? foodsData.map((food) => {
                  if (food.type.includes(activeType)) {
                    return (
                      <div key={food.id} onClick={() => clickFoodHandler(food)}>
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
                })
              : foodsData.map((food) => {
                  if (food.name.toLowerCase().includes(search)) {
                    return (
                      <div key={food.id} onClick={() => clickFoodHandler(food)}>
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
      {styleBack.display === "none" ? (
        <Orders
          foodsData={foodsData}
          setFoodsData={setFoodsData}
          setStyleBack={setStyleBack}
        />
      ) : (
        <Payment setFoodsData={setFoodsData} setStyleBack={setStyleBack} />
      )}
    </Container>
  );
};

export default Home;
