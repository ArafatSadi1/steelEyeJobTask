import "./App.css";
import List from "./components/List";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([{ text: "hello" }, { text: "world" }]);
  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;
