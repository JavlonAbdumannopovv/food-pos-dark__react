import React from "react";
import Button from "../../Button/Button";
import {
  Container,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  PaymentMethod,
  PeymentMethodTitle,
  Cards,
  Card,
  CardInfo,
  CardIcon,
  CardTitle,
  Cardholder,
  CardholderTitle,
  CardholderName,
  CardNumberWrapper,
  CardNumberTitle,
  CardNumber,
  Wrapper,
  Wrapper1,
  DateWrapper,
  DateTitle,
  DateInput,
  CvvWrapper,
  CvvTitle,
  Cvv,
  TypeWrapper,
  TypeTitle,
  Type,
  TableWrapper,
  TableTitle,
  Table,
  Footer,
  ButtonWrapper,
} from "./PaymentElements";

const Payment = ({ setFoodsData, setBackStyle }) => {
  const inputStyle = {
    width: "100%",
    height: "48px",
    background: "transparent",
    padding: "0 0 0 15px",
    border: "none",
    outline: "none",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
    color: "#E0E6E9",
  };

  const cardStyle = {
    background: "#252836",
  };

  const cancelPayment = () => {
    setBackStyle({ display: "none" });
  };

  const confirmPayment = () => {
    setFoodsData((prev) => {
      const updatedData = prev.map((item) => {
        return { ...item, count: 0 };
      });
      return updatedData;
    });

    cancelPayment();
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Payment</HeaderTitle>
        <HeaderSubtitle>3 payment method available</HeaderSubtitle>
      </Header>
      <PaymentMethod>
        <PeymentMethodTitle>Payment Method</PeymentMethodTitle>
        <Cards>
          <Card style={cardStyle}>
            <CardIcon>
              <i className="fa-regular fa-credit-card"></i>
            </CardIcon>
            <CardTitle>Credit Card</CardTitle>
          </Card>
          <Card>
            <CardIcon>
              <i className="fa-brands fa-paypal"></i>
            </CardIcon>
            <CardTitle>Paypal</CardTitle>
          </Card>
          <Card>
            <CardIcon>
              <i className="fa-regular fa-wallet"></i>
            </CardIcon>
            <CardTitle>Cash</CardTitle>
          </Card>
        </Cards>
      </PaymentMethod>
      <CardInfo>
        <Cardholder>
          <CardholderTitle>Cardholder Name</CardholderTitle>
          <CardholderName>
            <input style={inputStyle} type="text" placeholder="Name" />
          </CardholderName>
        </Cardholder>
        <CardNumberWrapper>
          <CardNumberTitle>Card Number</CardNumberTitle>
          <CardNumber>
            <input
              style={inputStyle}
              type="text"
              placeholder="Card number enter, please ..."
            />
          </CardNumber>
        </CardNumberWrapper>
        <Wrapper>
          <DateWrapper>
            <DateTitle>Expiration Date</DateTitle>
            <DateInput>
              <input style={inputStyle} type="text" placeholder="**/05/2023" />
            </DateInput>
          </DateWrapper>
          <CvvWrapper>
            <CvvTitle>Cvv</CvvTitle>
            <Cvv>
              <input
                style={inputStyle}
                type="password"
                placeholder="Cvv, please ..."
              />
            </Cvv>
          </CvvWrapper>
        </Wrapper>
        <Wrapper1>
          <TypeWrapper>
            <TypeTitle>Order Type</TypeTitle>
            <Type>
              <i className="fa-regular fa-down"></i>
              Dine In
            </Type>
          </TypeWrapper>
          <TableWrapper>
            <TableTitle>Table no</TableTitle>
            <Table>140</Table>
          </TableWrapper>
        </Wrapper1>
      </CardInfo>
      <Footer>
        <ButtonWrapper>
          <div onClick={cancelPayment}>
            <Button name="Cancel" width="175px" height="48px" active={false} />
          </div>
          <div onClick={confirmPayment}>
            <Button
              name="Confirm Payment"
              width="175px"
              height="48px"
              active={false}
            />
          </div>
        </ButtonWrapper>
      </Footer>
    </Container>
  );
};

export default Payment;
