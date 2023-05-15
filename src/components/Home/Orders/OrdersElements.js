import styled from "styled-components";

export const Container = styled.div`
  width: 409px;
  height: 834px;
  padding: 20px;
  background: #1f1d2b;
`;

export const Header = styled.div`
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
`;

export const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 214px;
  height: 34px;
  margin: 24px 0;
`;

export const Main = styled.div`
  width: 100%;
`;

export const MainHeader = styled.div`
  width: 361px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 24px;
  padding: 20px 0;
  border-bottom: 1px solid #393c49;
`;

export const MainHeaderTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  margin: 0 0 24px;
`;

export const OrderList = styled.div`
  width: 100%;
  height: 454px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit:scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #543c3b;
    border-radius: 30px;
    cursor: pointer;
  }
`;

export const Order = styled.div`
  width: 100%;
  height: 106px;
  margin: 0 0 30px;
  padding: 0 5px 0 0;
`;

export const OrderHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  margin: 0 0 10px;
`;

export const OrderInfo = styled.div`
  width: 140px;
  height: 39px;
  padding: 0 0 0 8px;
  overflow: hidden;
`;

export const OrderName = styled.h3`
  width: 300px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
`;

export const OrderPrice = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: #abbbc2;
  padding: 4px 0 0;
`;

export const OrderCount = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin: 0 0 0 70px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  cursor: pointer;
`;

export const OrderTotalPrice = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  margin: 0 0 0 24px;
`;

export const OrderFooter = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 297px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  padding: 0 15px;
`;

export const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #ff7ca3;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 0 0 18px;
`;
