import React, { useState } from "react";
import Button from "../../Button/Button";
import {
  Container,
  Header,
  HeaderTitle,
  SortWrapper,
  Main,
  MainHeader,
  MainHeaderTitle,
  OrderList,
  Order,
  OrderHeader,
  OrderInfo,
  OrderName,
  OrderPrice,
  OrderCount,
  OrderTotalPrice,
  OrderFooter,
  Input,
  Delete,
  Footer,
  DiscountWrapper,
  DiscountTitle,
  Discount,
  SubtotalWrapper,
  SubtotalTitle,
  Subtotal,
  ButtonWrapper,
} from "./OrdersElements";

const Orders = ({ foodsData, setFoodsData, setStyleBack }) => {
  const ind = [];
  const sortFoodsData = [];
  foodsData.forEach((item) => {
    if (item.count > 0) {
      ind.push(item.index);
      ind.sort();
    }
  });
  ind.forEach((el) => {
    foodsData.forEach((item) => {
      if (item.count > 0 && el === item.index) {
        sortFoodsData.unshift(item);
      }
    });
  });

  const inputStyle = {
    width: "100%",
    height: "45px",
    border: "none",
    outline: "none",
    background: "transparent",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
    color: "#E0E6E9",
  };

  const iconStyle = {
    fontSize: "20px",
    color: "#EA7C69",
  };

  const imgStyle = {
    borderRadius: "100%",
  };

  const changeItemCount = (id) => {
    setFoodsData((prev) => {
      const updateData = prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      return updateData;
    });
  };

  const deleteItemHandler = (id) => {
    setFoodsData((prev) => {
      const updateData = prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: 0 };
        } else {
          return item;
        }
      });

      return updateData;
    });
  };

  const ordersListPrint = () => {
    const ordersList1 = sortFoodsData.map((item) => {
      if (item.count > 0) {
        return (
          <Order key={item.id}>
            <OrderHeader>
              <img
                style={imgStyle}
                width="40px"
                height="40px"
                src={item.img}
                alt={item.name}
              />
              <OrderInfo>
                <OrderName>{item.name}</OrderName>
                <OrderPrice>${item.price}</OrderPrice>
              </OrderInfo>
              <OrderCount onClick={() => changeItemCount(item.id)}>
                {item.count}
              </OrderCount>
              <OrderTotalPrice>
                {item.getTotalPrice(item.count, item.price).toFixed(2)}
              </OrderTotalPrice>
            </OrderHeader>
            <OrderFooter>
              <Input>
                <input
                  type="text"
                  placeholder="Order Note..."
                  style={inputStyle}
                />
              </Input>
              <Delete onClick={() => deleteItemHandler(item.id)}>
                <i style={iconStyle} className="fa fa-trash"></i>
              </Delete>
            </OrderFooter>
          </Order>
        );
      } else {
        return null;
      }
    });
    return ordersList1;
  };

  const [subtotal, setSubtotal] = useState(0);

  React.useEffect(() => {
    setSubtotal((prev) => {
      let subtotal = 0;
      const updatedItem = sortFoodsData.map((item) => {
        return (subtotal = subtotal + item.count * item.price);
      });
      return subtotal.toFixed(2);
    });
  }, [sortFoodsData]);

  const clickButtonHandler = () => {
    if (sortFoodsData.length > 0) {
      setStyleBack({ display: "absolute" });
    }
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Orders</HeaderTitle>
        <SortWrapper>
          <Button name="Dine In" width="66px" height="34px" active={true} />
          <Button name="To Go" width="58px" height="34px" active={false} />
          <Button name="Delivery" width="74px" height="34px" active={false} />
        </SortWrapper>
      </Header>
      <Main>
        <MainHeader>
          <MainHeaderTitle>Item</MainHeaderTitle>
          <MainHeaderTitle>Qty</MainHeaderTitle>
          <MainHeaderTitle>Price</MainHeaderTitle>
        </MainHeader>
        <OrderList>{ordersListPrint()}</OrderList>
      </Main>
      <Footer>
        <DiscountWrapper>
          <DiscountTitle>Discount</DiscountTitle>
          <Discount>$0</Discount>
        </DiscountWrapper>
        <SubtotalWrapper>
          <SubtotalTitle>Sub total</SubtotalTitle>
          <Subtotal>${subtotal}</Subtotal>
        </SubtotalWrapper>
        <ButtonWrapper onClick={clickButtonHandler}>
          <Button
            name="Continue to Payment"
            width="361px"
            height="48px"
            active={false}
          />
        </ButtonWrapper>
      </Footer>
    </Container>
  );
};

export default Orders;
