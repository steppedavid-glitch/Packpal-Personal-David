import { useEffect, useState } from "react";

import "./ThemeToggle.css";

export default function ThemeToggle() {

    const [theme, setTheme] = useState(

        localStorage.getItem("packpal-theme") || "light"

    );

    useEffect(() => {

        document.documentElement.setAttribute(

            "data-theme",

            theme

        );

        localStorage.setItem(

            "packpal-theme",

            theme

        );

    }, [theme]);

    function toggleTheme() {

        setTheme(

            theme === "light"

                ? "dark"

                : "light"

        );

    }

    return (

        <button

            className="theme-toggle"

            onClick={toggleTheme}

        >

            {theme === "light" ? "🌙" : "☀️"}

        </button>

    );

}