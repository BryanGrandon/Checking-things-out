import "./main-button-styles.css";

export function MainButton({ text, theFunction }) {
  return (
    <button className="btn" onClick={theFunction}>
      {text}
    </button>
  );
}
