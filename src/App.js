import logo from "./logo.svg";
import { useState } from "react";
import { BtnAdd } from "./components/Button";
import Note from "./components/ToDo";
import "./App.css";

function Input() {
  return <input className="valueInput" />;
}

function App() {
  const [todoValue, setTodoValue] = useState("");

  const todo = [
    {
      content: "",
      done: false,
      id: 0,
    },
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Input />
          <BtnAdd onClick={() => setTodoValue("")} />
        </div>
        <div className="todoList">
          <div className="todoItem">
            <Note />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
