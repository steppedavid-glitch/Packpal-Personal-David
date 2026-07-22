import "./Header.css";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header(){

    return(

        <header className="header">

            <div className="header-content">

                <h1>

                    🧳 PackPal

                </h1>

                <ThemeToggle/>

            </div>

        </header>

    );

}