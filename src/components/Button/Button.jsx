import "./Button.css";

export function Button({ text, theFunction }) {
  return (
    <button className="btn" onClick={theFunction}>
      {text}
    </button>
  );
}
