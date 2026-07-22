import "./Button.css";

export default function Button({ children, onClick }) {
  return (
    <button className="pp-button" onClick={onClick}>
      {children}
    </button>
  );
}