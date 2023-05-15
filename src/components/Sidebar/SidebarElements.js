import styled from "styled-components";
export const Items = styled.ul`
  width: 104px;
  height: 834px;
  background: #1e1d2a;
  padding: 24px 0 0 12px;
`;

export const Logo = styled.div`
  width: 56px;
  heihgt: 56px;
  background: #553c3a;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  margin: 0 0 0 16px;
`;

export const Item = styled.li`
  width: 92px;
  height: 80px;
  margin: 12px 0 0;
  border-radius: 12px 0px 0px 12px;
  padding: 12px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Border = styled.div`
  position: absolute;
  top: -10px;
  height: 10px;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 10px;
    background: #1e1d2a;
  }
`;

export const Border1 = styled.div`
  position: absolute;
  bottom: -8px;
  height: 10px;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    background: #1e1d2a;
  }
`;

export const Wrapper = styled.div`
  width: 56px;
  height: 56px;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-radius: 8px;

  &:hover {
    background: #553c3a !important;
  }
`;
