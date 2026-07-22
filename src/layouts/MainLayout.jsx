import Header from "../components/Header/Header";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />

      <main className="main-layout">
        {children}
      </main>
    </>
  );
}