import React, { useState } from "react";
import ErrorSection from "../../Error/ErrorSection";
import Products from "./Products/Products";
import {
  Container,
  Title,
  Wrapper,
  Menu,
  MenuList,
  MenuItem,
  MenuItem1,
  ItemWrapper,
  ItemTitle,
  ItemTitle1,
  ItemSubtitle,
  Main,
} from "./SettingsElements";
import { settingsMenu } from "../../data/data";

const Settings = ({ foodsData, setFoodsData, backStyle, setBackStyle }) => {
  const iconStyle = {
    fontSize: "14px",
    color: "#999",
    margin: "1px 5px 0 0",
  };
  const iconStyle1 = {
    fontSize: "14px",
    margin: "1px 5px 0 0",
    color: "#ea7c69",
  };
  const [category, setCategory] = useState("products");

  return (
    <Container>
      <Title>Settings</Title>
      <Wrapper>
        <Menu>
          <MenuList>
            {settingsMenu.map((item) => {
              if (item.title === "Products Management") {
                return (
                  <MenuItem1 key={item.id} style={item.style}>
                    <i style={iconStyle1} className={item.icon}></i>
                    <ItemWrapper>
                      <ItemTitle1>{item.title}</ItemTitle1>
                      <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                    </ItemWrapper>
                  </MenuItem1>
                );
              } else if (item.title !== "Products Management") {
                return (
                  <MenuItem key={item.id} style={item.style}>
                    <i style={iconStyle} className={item.icon}></i>
                    <ItemWrapper>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                    </ItemWrapper>
                  </MenuItem>
                );
              }
              return null;
            })}
          </MenuList>
        </Menu>
        <Main>
          {category === "error" ? (
            <ErrorSection />
          ) : (
            <Products foodsData={foodsData} setFoodsData={setFoodsData}      setBackStyle={setBackStyle}/>
          )}
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Settings;
