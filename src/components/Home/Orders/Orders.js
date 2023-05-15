import React from "react";
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
} from "./OrdersElements";

const Orders = () => {
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
  }

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
        <OrderList>
        <Order>
            <OrderHeader>
              <img
                style={imgStyle}
                width="40px"
                height="40px"
                src="https://www.foodandwine.com/thmb/4GxVQDnRapxne7_QcnTgbiim4hg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE1215-XL-chocolate-peppermint-brownies-47f3aa7686d24869823ad190c73d9388.jpg"
                alt="qwerty"
              />
              <OrderInfo>
                <OrderName>Beef dumpling in hot and sour soup</OrderName>
                <OrderPrice>$2.29</OrderPrice>
              </OrderInfo>
              <OrderCount>2</OrderCount>
              <OrderTotalPrice>$4.58</OrderTotalPrice>
            </OrderHeader>
            <OrderFooter>
              <Input>
                <input
                  type="text"
                  placeholder="Order Note..."
                  style={inputStyle}
                />
              </Input>
              <Delete>
                <i style={iconStyle} className="fa fa-trash"></i>
              </Delete>
            </OrderFooter>
          </Order>
          <Order>
            <OrderHeader>
              <img
                style={imgStyle}
                width="40px"
                height="40px"
                src="https://www.foodandwine.com/thmb/4GxVQDnRapxne7_QcnTgbiim4hg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE1215-XL-chocolate-peppermint-brownies-47f3aa7686d24869823ad190c73d9388.jpg"
                alt="qwerty"
              />
              <OrderInfo>
                <OrderName>Beef dumpling in hot and sour soup</OrderName>
                <OrderPrice>$2.29</OrderPrice>
              </OrderInfo>
              <OrderCount>2</OrderCount>
              <OrderTotalPrice>$4.58</OrderTotalPrice>
            </OrderHeader>
            <OrderFooter>
              <Input>
                <input
                  type="text"
                  placeholder="Order Note..."
                  style={inputStyle}
                />
              </Input>
              <Delete>
                <i style={iconStyle} className="fa fa-trash"></i>
              </Delete>
            </OrderFooter>
          </Order>
          <Order>
            <OrderHeader>
              <img
                style={imgStyle}
                width="40px"
                height="40px"
                src="https://www.foodandwine.com/thmb/4GxVQDnRapxne7_QcnTgbiim4hg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE1215-XL-chocolate-peppermint-brownies-47f3aa7686d24869823ad190c73d9388.jpg"
                alt="qwerty"
              />
              <OrderInfo>
                <OrderName>Beef dumpling in hot and sour soup</OrderName>
                <OrderPrice>$2.29</OrderPrice>
              </OrderInfo>
              <OrderCount>2</OrderCount>
              <OrderTotalPrice>$4.58</OrderTotalPrice>
            </OrderHeader>
            <OrderFooter>
              <Input>
                <input
                  type="text"
                  placeholder="Order Note..."
                  style={inputStyle}
                />
              </Input>
              <Delete>
                <i style={iconStyle} className="fa fa-trash"></i>
              </Delete>
            </OrderFooter>
          </Order>
          <Order>
            <OrderHeader>
              <img
                style={imgStyle}
                width="40px"
                height="40px"
                src="https://www.foodandwine.com/thmb/4GxVQDnRapxne7_QcnTgbiim4hg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE1215-XL-chocolate-peppermint-brownies-47f3aa7686d24869823ad190c73d9388.jpg"
                alt="qwerty"
              />
              <OrderInfo>
                <OrderName>Beef dumpling in hot and sour soup</OrderName>
                <OrderPrice>$2.29</OrderPrice>
              </OrderInfo>
              <OrderCount>2</OrderCount>
              <OrderTotalPrice>$4.58</OrderTotalPrice>
            </OrderHeader>
            <OrderFooter>
              <Input>
                <input
                  type="text"
                  placeholder="Order Note..."
                  style={inputStyle}
                />
              </Input>
              <Delete>
                <i style={iconStyle} className="fa fa-trash"></i>
              </Delete>
            </OrderFooter>
          </Order>
          <Order>
            <OrderHeader>
              <img
                style={imgStyle}
                width="40px"
                height="40px"
                src="https://www.foodandwine.com/thmb/4GxVQDnRapxne7_QcnTgbiim4hg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE1215-XL-chocolate-peppermint-brownies-47f3aa7686d24869823ad190c73d9388.jpg"
                alt="qwerty"
              />
              <OrderInfo>
                <OrderName>Beef dumpling in hot and sour soup</OrderName>
                <OrderPrice>$2.29</OrderPrice>
              </OrderInfo>
              <OrderCount>2</OrderCount>
              <OrderTotalPrice>$4.58</OrderTotalPrice>
            </OrderHeader>
            <OrderFooter>
              <Input>
                <input
                  type="text"
                  placeholder="Order Note..."
                  style={inputStyle}
                />
              </Input>
              <Delete>
                <i style={iconStyle} className="fa fa-trash"></i>
              </Delete>
            </OrderFooter>
          </Order>
          <Order>
            <OrderHeader>
              <img
                style={imgStyle}
                width="40px"
                height="40px"
                src="https://www.foodandwine.com/thmb/4GxVQDnRapxne7_QcnTgbiim4hg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE1215-XL-chocolate-peppermint-brownies-47f3aa7686d24869823ad190c73d9388.jpg"
                alt="qwerty"
              />
              <OrderInfo>
                <OrderName>Beef dumpling in hot and sour soup</OrderName>
                <OrderPrice>$2.29</OrderPrice>
              </OrderInfo>
              <OrderCount>2</OrderCount>
              <OrderTotalPrice>$4.58</OrderTotalPrice>
            </OrderHeader>
            <OrderFooter>
              <Input>
                <input
                  type="text"
                  placeholder="Order Note..."
                  style={inputStyle}
                />
              </Input>
              <Delete>
                <i style={iconStyle} className="fa fa-trash"></i>
              </Delete>
            </OrderFooter>
          </Order>
          
        </OrderList>
      </Main>
    </Container>
  );
};

export default Orders;
