import styled from "styled-components";

export const Container = styled.div`
  width: 192px;
  height: 226px;
  background: #1f1d2b;
  border-radius: 16px;
  text-align: center;
  padding: 0 0 24px !important;
  margin: 58px 0 0 0;
  cursor: pointer;
  transition: all .4s ease;

  &:hover{
    transform: translateY(-10px);
  }
`;

export const Content = styled.div`
  transform: translateY(-34px);
`;

export const Name = styled.div`
  width: 144px;
  height: 36px;
  margin: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
`;

export const Price = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin: 8px 0 4px;
`;

export const Bowl = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
`;
