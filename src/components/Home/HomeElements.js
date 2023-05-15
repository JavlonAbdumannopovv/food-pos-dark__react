import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Primary = styled.div`
  width: 681px;
  height: 834px;
  padding: 24px 38px 0 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 633px;
  height: 65px;
`;

export const User = styled.div`
  min-width: 164px;
  height: 65px;
`;

export const UserName = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
`;

export const UserDate = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #e0e6e9;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
  width: 220px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 0 24px 0;
`;

export const Category = styled.div`
  width: 633px;
  height: 33px;
  display: flex;
  align-items: center;
  margin: 11px 0 24px;
  border-bottom: 1px solid #393c49;
  padding: 0 0 13px 0;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 300%;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin: 0 32px 0 0;
  transition: all 0.4s ease;

  &:hover {
    color: #ea7c69 !important;
    border-bottom: 2px solid #ea7c69;
  }
`;

export const Foods = styled.div`
  width: 632px;
  height: 676px;
  overflow-x: hidden;
  padding: 0 5px 0 0;

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

export const FoodsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 630px;
  height: 48px;
`;

export const FoodsTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
`;

export const Sort = styled.div`
  width: 100px;
  height: 48px;
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  color: #fff;
  cursor: pointer;
`;

export const FoodsMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
