import logo from "./logo.svg";
import { useState } from "react";
import { BtnAdd, BtnDelete } from "./components/Button";
import "./App.css";

function Input({
  inputValue,
  handleInputChange,
  handleCheckboxChange,
  onAdd,
  onDelete,
}) {
  return (
    <div className="wrapper">
      <div className="container">
        <input onChange={handleInputChange} className="valueInput" />
        <BtnAdd onClick={onAdd} />
      </div>
      <div className="todoList">
        <div className="todoItem">
          <input onChange={handleCheckboxChange} type="checkbox" />
          <p>{inputValue}</p>
          <BtnDelete onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(changeEvent) {
    setInputValue(changeEvent.target.value);
  }

  function handleCheckboxChange(changeEvent) {
    setInputValue(changeEvent.target.checked);
  }

  return (
    <div className="App">
      <Input
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        onAdd={() => setInputValue(inputValue)}
        onDelete={() => setInputValue("")}
      />
    </div>
  );
}

export default App;
