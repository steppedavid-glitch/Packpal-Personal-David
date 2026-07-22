import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {

        const saved = localStorage.getItem(key);

        if(saved){

            return JSON.parse(saved);

        }

        return defaultValue;

    });

    useEffect(() => {

        localStorage.setItem(

            key,

            JSON.stringify(value)

        );

    }, [key, value]);

    return [value, setValue];

}