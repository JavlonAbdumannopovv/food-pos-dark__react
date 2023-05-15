import React from "react";
import Settings from "../Settings/Settings";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>                
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </>
  )
}

export default Main;

// import React from "react";

// const Example = () => {
//   return (
//     <div>Example</div>
//   )
// }

// export default Example;