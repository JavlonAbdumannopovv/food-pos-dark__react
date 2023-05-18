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
  ItemWrapper,
  ItemTitle,
  ItemSubtitle,
  Main,
} from "./SettingsElements";
import { settingsMenu } from "../../data/data";

const Settings = () => {
  const iconStyle = {
    fontSize: "14px",
    color: "#999",
    margin: "1px 5px 0 0",
  };
  const [category, setCategory] = useState("products");
  return (
    <Container>
      <Title>Settings</Title>
      <Wrapper>
        <Menu>
          <MenuList>
            {settingsMenu.map((item) => (
              <MenuItem key={item.id}>
                <i style={iconStyle} className={item.icon}></i>
                <ItemWrapper>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                </ItemWrapper>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Main>
        {
          category === "error"
          ? <ErrorSection />
          : <Products />
        }
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Settings;
