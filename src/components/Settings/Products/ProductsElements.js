import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  ${"" /* position: relative; */}
`;

export const Category = styled.div`
  width: 100%;
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
  width: 100%;
  height: 500px;
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
  width: 200px;
  height: 48px;
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border: 1px solid #fff;
  }
`;

export const FoodsMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const NewDish = styled.div`
  width: 221px;
  height: 299px;
  background: #1f1d2b;
  border: 1px dashed #ea7c69;
  border-radius: 8px;
  margin: 0 0 16px 0;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(234, 124, 105, 0.26);
  }
`;

export const NewDishIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 111px auto 8px;
  text-decoration: none !important;
  text-align: center;
`;

export const NewDishTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #ea7c69;
`;

export const Food = styled.div`
  width: 221px;
  height: 299px;
  background: #1f1d2b;
  border-radius: 16px;
  text-align: center;
  padding: 24px 0 0 !important;
  margin: 0 0 16px 0;
  background: #1f1d2b;
  border: 1px solid #393c49;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.4s ease;
`;

export const FoodName = styled.div`
  width: 144px;
  height: 36px;
  margin: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
`;

export const FoodPrice = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin: 8px 0 4px;
`;

export const FoodBowl = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
`;

export const Wrapper = styled.div`
  width: 144px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Edit = styled.div`
  width: 100%;
  height: 45px;
  margin: 10px 0 0;
  left: 0%;
  bottom: 0%;
  background: #54363b;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease;

  &:hover {
    background: #ea7c69;
  }

  &:hover p {
    color: #fff;
  }
`;

export const EditIcon = styled.div``;

export const EditTitle = styled.p`
  ont-weight: 600;
  font-size: 15px;
  line-height: 140%;
  color: #ea7c69;
`;

export const ButtonWrapper = styled.div`
  width: 352px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 172px;
  height: 48px;
  border: 1px solid #ea7c69;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #ea7c69;
  cursor: pointer;
  margin: 20px 0 0;
  transition: all 0.4s ease;

  &:hover {
    background: #ea7c69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
    border-radius: 8px;
    color: #fff;
  }
`;

export const FoodMenu = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 405px;
  height: 540px;
  padding: 24px;
  background: #1f1d2b;
  background: #111;
  border-radius: 16px;
  z-index: 999;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  margin: 0 0 16px;
`;

export const MenuNameTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  margin: 0 0 8px;
`;

export const MenuNameInput = styled.div`
  width: 100%;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
`;

export const TypeWrapper = styled.div`
  width: 100%;
  height: 225px;
  margin: 0 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const State = styled.div`
  width: 172px;
  height: 74px;
`;

export const Type = styled.div`
  width: 172px;
  height: 74px;
`;

export const MenuItem = styled.div`
  width: 172px;
  height: 48px;
  margin: 0 0 8px;
  background: transparent;
  border: 1px solid #393c49;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 1px solid #abbbc2;
  }
`;

export const MenuButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuButton = styled.div`
  width: 100px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ea7c69;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: #ea7c69;
  cursor: pointer;
  margin: 20px 0 0;
  transition: all 0.4s ease;

  &:hover {
    background: #ea7c69;
    box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.4);
    border-radius: 8px;
    color: #fff;
  }
`;
