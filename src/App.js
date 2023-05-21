import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { Back } from "./AppElements";
import { backData } from "./data/data";

function App() {
  const [backStyle, setBackStyle] = React.useState(backData);
  return (
    <div className="App">
      <Back style={backStyle} />
      <Sidebar />
      <Main backStyle={backStyle} setBackStyle={setBackStyle}/>
    </div>
  );
}

export default App;
