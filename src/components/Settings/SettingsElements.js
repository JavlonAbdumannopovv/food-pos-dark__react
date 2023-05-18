import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  margin: 0 0 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  width: 275px;
  height: 723px;
  background: #1f1d2b;
  border-radius: 8px;
`;

export const MenuList = styled.div`
  width: 100%;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 87px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    background: rgba(234, 124, 105, 0.26);
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  margin: 0 0 0 6px;
`;

export const ItemTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
`;

export const ItemSubtitle = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
`;

export const Main = styled.div`
  width: 743px;
  height: 723px;
  background: #1f1d2b;
  border-radius: 8px;
`;
