import React from "react";
import Settings from "../Settings/Settings";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { foods } from "../../data/data";

const Main = ({ backStyle,setBackStyle }) => {
  const [foodsData, setFoodsData] = React.useState(foods.data);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              backStyle={backStyle}
              setBackStyle={setBackStyle}
              foodsData={foodsData}
              setFoodsData={setFoodsData}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              foodsData={foodsData}
              setFoodsData={setFoodsData}
              backStyle={backStyle}
              setBackStyle={setBackStyle}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Main;

// import React from "react";

// const Example = () => {
//   return (
//     <div>Example</div>
//   )
// }

// export default Example;
