import "./Button.css";

function BtnAdd({ onClick }) {
  return (
    <button onClick={onClick} className="btnAdd">
      Add
    </button>
  );
}

function BtnDelete({ onClick }) {
  return (
    <button onClick={onClick} className="btnDelete">
      Löschen
    </button>
  );
}

export { BtnAdd, BtnDelete };
