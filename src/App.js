import logo from "./logo.svg";
import { useState } from "react";
import { BtnAdd, BtnDelete } from "./components/Button";
import "./App.css";

function Input({
  inputValue,
  handleInputChange,
  onAdd,
  onDelete,
  notes,
  onToggle,
}) {
  return (
    <div className="wrapper">
      <div className="container">
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="valueInput"
          placeholder="Aufgabe hinzufügen..."
        />
        <BtnAdd onClick={onAdd} />
      </div>
      {!notes || notes.length === 0 ? (
        <p>Keine Aufgaben vorhanden.</p>
      ) : (
        <div className="todoList">
          {notes.map((note) => (
            <div key={note.id} className="todoItem">
              <input
                type="checkbox"
                checked={note.done}
                onChange={() => onToggle(note.id)}
              />
              <p
                style={{
                  textDecoration: note.done ? "line-through" : "none",
                  margin: 0,
                  flex: 1,
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                {note.text}
              </p>
              <BtnDelete onClick={() => onDelete(note.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  function handleInputChange(changeEvent) {
    setInputValue(changeEvent.target.value);
  }

  function handleAddNote() {
    const newNote = inputValue.trim();
    if (!newNote) {
      alert("Bitte geben Sie eine Aufgabe ein.");
      return;
    }
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        text: newNote,
        done: false,
      },
    ]);
    setInputValue("");
  }

  function handleDeleteTodo(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    setInputValue("");
  }

  function handleToggleNote(id) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, done: !note.done } : note,
      ),
    );
  }

  return (
    <div className="App">
      <Input
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        onAdd={handleAddNote}
        onDelete={handleDeleteTodo}
        notes={notes}
        onToggle={handleToggleNote}
      />
    </div>
  );
}

export default App;
