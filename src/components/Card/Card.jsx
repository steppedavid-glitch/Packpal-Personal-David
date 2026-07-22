import "./Card.css";

export default function Card({ children }) {
  return (
    <div className="pp-card">
      {children}
    </div>
  );
}