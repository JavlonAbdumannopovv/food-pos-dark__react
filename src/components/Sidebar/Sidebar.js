import React, { useState } from "react";
import { sidebarItems } from "../../data/data";
import { NavLink } from "react-router-dom";
import logo from "../../assets/bx_bxs-store-alt.svg";
import { Items, Item, Wrapper, Logo, Border, Border1 } from "./SidebarElements";
const Sidebar = () => {
  const [data, setData] = useState(sidebarItems.data);

  return (
    <Items>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      {data.map((item) => (
        <NavLink to={item.link} key={item.id}>
          <Item 
            className="Item"
            
          >
            <Wrapper  className="Wrapper">
              <i
                className={item.icon + " icon"}
                aria-hidden="true"
              ></i>
              <Border  className="Item"/>
              <Border1  className="Item"/>
            </Wrapper>
          </Item>
        </NavLink>
      ))}
    </Items>
  );
};

export default Sidebar;
