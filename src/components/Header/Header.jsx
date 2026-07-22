import "./Header.css";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header(){

    return(

        <header className="header">

            <div className="header-content">

                <h1>

                    🧳 Op Reis David & Wendy

                </h1>

                <ThemeToggle/>

            </div>

        </header>

    );

}
