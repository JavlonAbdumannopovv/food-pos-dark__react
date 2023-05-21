import styled from "styled-components";

export const Container = styled.div`
  width: 405px;
  height: 834px;
  padding: 64px 24px 24px;
  background: #1f1d2b;
  border-radius: 16px 16px 0px 16px;
  z-index: 101;
`;

export const Header = styled.div`
  width: 100%;
  height: 93px;
  border-bottom: 1px solid #393c49;
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
`;

export const HeaderSubtitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 8px 0 0;
  line-height: 140%;
  color: #abbbc2;
`;

export const PaymentMethod = styled.div`
  width: 100%;
`;

export const PeymentMethodTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  margin: 24px 0 0;
`;

export const Cards = styled.div`
  width: 319px;
  height: 64px;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled.div`
  width: 101px;
  height: 64px;
  background: transparent;
  border: 1px solid #abbbc2;
  padding: 10px 0 0;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: #252836;
  }
`;

export const CardIcon = styled.div`
  width: 24px;
  height: 24px;
  margin: auto;
  margin: 0 auto 2px;
`;

export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
`;

export const CardInfo = styled.div`
  width: 100%;
`;

export const Cardholder = styled.div`
  width: 100%;
`;

export const CardholderTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  margin: 0 0 8px;
`;

export const CardholderName = styled.div`
  width: 100%;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const CardNumberWrapper = styled.div`
  margin: 30px 0;
`;

export const CardNumberTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  margin: 0 0 8px;
`;

export const CardNumber = styled.div`
  width: 100%;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 16px;
  border-bottom: 1px solid #393c49;
`;

export const Wrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 0;
`;

export const DateWrapper = styled.div`
  width: 100%;
`;

export const DateTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  margin: 0 0 8px;
`;

export const DateInput = styled.div`
  width: 172px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const CvvWrapper = styled.div``;

export const CvvTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  margin: 0 0 8px;
`;

export const Cvv = styled.div`
  width: 172px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const TypeWrapper = styled.div`
  width: 172px;
`;

export const TypeTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  margin: 0 0 8px;
`;

export const Type = styled.div`
  width: 172px;
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const TableWrapper = styled.div`
  width: 172px;
`;

export const TableTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  margin: 0 0 8px;
`;

export const Table = styled.div`
  width: 172px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const Footer = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 66px 0 0;
`;
