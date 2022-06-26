 import { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CardUser from "./Componets/CardUser";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <CardUser />
    </div>
  );
}

export default App;
