import { useState } from "react";
import { BtnAdd, BtnDelete } from "./components/Button";
import { useFormInput } from "./components/useFormInput";
import "./App.css";

function Input({ input, onAdd, onDelete, notes, onToggle }) {
  return (
    <div className="wrapper">
      <div className="container">
        <input
          {...input}
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
  const input = useFormInput("");

  const [notes, setNotes] = useState([]);

  function handleAddNote() {
    const newNote = input.value.trim();
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
    input.reset("");
  }

  function handleDeleteTodo(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    input.reset("");
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
        input={input}
        onAdd={handleAddNote}
        onDelete={handleDeleteTodo}
        notes={notes}
        onToggle={handleToggleNote}
      />
    </div>
  );
}

export default App;
