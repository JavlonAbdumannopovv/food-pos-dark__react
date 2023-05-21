import React, { useState } from "react";
import {
  titles,
  foodMenu,
  newFoods,
  Food1,
  newEditFoods,
} from "../../../data/data";
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
  Completed,
} from "./ProductsElements.js";

const Products = ({ foodsData, setFoodsData, setBackStyle }) => {
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
    width: "100%",
    height: "40px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
  };
  const smallStyle = {
    display: "none",
  };
  const menuStyle = {
    display: "none",
  };

  const [newFoodss, setNewFoods] = useState(newFoods);
  const [newEditFoodss, setNewEditFoods] = useState(newEditFoods);
  const [activeType, setActiveType] = useState("Hot Dishes");
  const [titlesData, setTitlesData] = useState(titles);
  const [imgInput, setImgInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [foodState, setFoodState] = useState(foodMenu.foodState);
  const [foodType, setFoodType] = useState(foodMenu.foodType);
  const [addShow, setAddShow] = useState(true);
  const [menuActive, setMenuActive] = useState(menuStyle);
  const [completed, setCompleted] = useState(smallStyle);
  const [clickedId, setClickedId] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const [cloneActive, setCloneActive] = useState(0);
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

  const imgInputChanged = (e) => {
    setCompleted({ display: "none" });
    setImgInput(e.target.value);
  };

  const nameInputChanged = (e) => {
    setCompleted({ display: "none" });
    setNameInput(e.target.value);
  };

  const foodStateItemClick = (id) => {
    setFoodState((prev) => {
      const data = prev.map((item) => {
        return { ...item, active: false };
      });
      const updatedData = data.map((item) => {
        if (item.id === id) {
          return { ...item, active: true };
        } else {
          return item;
        }
      });
      return updatedData;
    });
  };

  const foodTypeItemClick = (id) => {
    setFoodType((prev) => {
      const data = prev.map((item) => {
        return { ...item, active: false };
      });
      const updatedData = data.map((item) => {
        if (item.id === id) {
          return { ...item, active: true };
        } else {
          return item;
        }
      });
      return updatedData;
    });
  };

  const clickNewDish = () => {
    setCloneActive((prev) => prev + 1);
    setAddShow(true);
    setMenuActive({ display: "block" });
    setBackStyle({ display: "block" });
  };

  const addNewFood = () => {
    if (imgInput !== "" && nameInput !== "") {
      setCompleted({ display: "none" });
      setNewFoods((prev) => {
        const stateActive = foodState.filter((item) => item.active === true);
        const typeActive = foodType.filter((item) => item.active === true);
        const uploadedData = [
          ...prev,
          new Food1(
            imgInput,
            nameInput,
            `${stateActive[0].type} ${typeActive[0].type}`
          ),
        ];
        return uploadedData;
      });
      setFoodsData((prev) => {
        const stateActive = foodState.filter((item) => item.active === true);
        const typeActive = foodType.filter((item) => item.active === true);
        const uploadedData = [
          new Food1(
            imgInput,
            nameInput,
            `${stateActive[0].type} ${typeActive[0].type}`
          ),
          ...prev,
        ];
        return uploadedData;
      });
      cancelNewFood();
      setButtonActive(true);
    } else if (imgInput === "" || nameInput === "") {
      setCompleted({ display: "block" });
    }
  };

  const cancelNewFood = () => {
    setMenuActive({ display: "none" });
    setCompleted({ display: "none" });
    setNameInput("");
    setImgInput("");
    setBackStyle({ display: "none" });
  };

  const editDishHandler = (id) => {
    setCloneActive((prev) => prev + 1);
    foodsData.forEach((food) => {
      if (food.id === id) {
        setNameInput(food.name);
        setImgInput(food.img);
      }
    });
    setAddShow(false);
    setMenuActive({ display: "block" });
    setClickedId(id);
    setBackStyle({ display: "block" });
  };

  const editClickedDish = (id) => {
    if (imgInput !== "" && nameInput !== "") {
      setCompleted({ display: "none" });
      const stateActive = foodState.filter((item) => item.active === true);
      const typeActive = foodType.filter((item) => item.active === true);
      const data = foodsData.map((food) => {
        if (food.id === id) {
          return { ...food };
        } else {
          return null;
        }
      });

      setFoodsData((prev) => {
        const updatedData = prev.map((food) => {
          if (food.id === id) {
            const newObj = new Food1(
              imgInput,
              nameInput,
              `${stateActive[0].type} ${typeActive[0].type}`
            );
            return { ...newObj, id: id };
          } else {
            return food;
          }
        });
        return [...updatedData];
      });

      setButtonActive(true);
      cancelNewFood();
    } else if (imgInput === "" || nameInput === "") {
      setCompleted({ display: "block" });
    }
  };
  React.useEffect(() => {
    console.log(cloneActive);
    if (cloneActive === 0) {
      setNewEditFoods((prev) => {
        const data1 = [];
        foodsData.forEach((food, i) => {
          data1.push(food);
        });
        return [...prev, ...data1];
      });
    }
    setCloneActive((prev) => prev + 1);
  }, [foodsData]);

  const discardChanges = () => {
    setFoodsData((prev) => {
      const a = [];
      newEditFoodss.forEach((item, i) => {
        if (i < newEditFoodss.length / 2) {
          a.push(item);
        }
      });
      return a;
    });
    saveChanges();
  };
  const saveChanges = () => {
    setButtonActive(false);
    setNewFoods([]);
    setNewEditFoods([]);
    setCloneActive(0);
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
          <NewDish onClick={clickNewDish}>
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
                  <Edit onClick={() => editDishHandler(food.id)}>
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
      {buttonActive ? (
        <ButtonWrapper>
          <Button onClick={discardChanges}>Discard Changes</Button>
          <Button onClick={saveChanges}>Save Changes</Button>
        </ButtonWrapper>
      ) : null}
      <FoodMenu style={menuActive}>
        <Completed style={completed}>Please, Full completed!</Completed>
        <MenuWrapper>
          <MenuNameTitle>Img Url</MenuNameTitle>
          <MenuNameInput>
            <input
              value={imgInput}
              style={inputStyle}
              type="text"
              placeholder="Food img url enter ..."
              onChange={imgInputChanged}
            />
          </MenuNameInput>
        </MenuWrapper>
        <MenuWrapper>
          <MenuNameTitle>Name</MenuNameTitle>
          <MenuNameInput>
            <input
              value={nameInput}
              style={inputStyle}
              type="text"
              placeholder="Food name enter ..."
              onChange={nameInputChanged}
            />
          </MenuNameInput>
        </MenuWrapper>
        <TypeWrapper>
          <State>
            <MenuNameTitle>Food State</MenuNameTitle>
            {foodState.map((item) => (
              <MenuItem
                onClick={() => foodStateItemClick(item.id)}
                key={item.id}
                style={item.style(item.active)}
              >
                {item.type}
              </MenuItem>
            ))}
          </State>
          <Type>
            <MenuNameTitle>Food Type</MenuNameTitle>
            {foodType.map((item) => (
              <MenuItem
                onClick={() => foodTypeItemClick(item.id)}
                key={item.id}
                style={item.style(item.active)}
              >
                {item.type}
              </MenuItem>
            ))}
          </Type>
        </TypeWrapper>
        <MenuButtons>
          <MenuButton onClick={cancelNewFood}>Cancel</MenuButton>
          {addShow ? (
            <MenuButton onClick={() => addNewFood()}>Add</MenuButton>
          ) : (
            <MenuButton onClick={() => editClickedDish(clickedId)}>
              Edit
            </MenuButton>
          )}
        </MenuButtons>
      </FoodMenu>
    </Container>
  );
};

export default Products;
