import { useState } from "react";

export const useLocalStorage = (keyValue, initialValue) => {
    const [storedValue, setStoredValue] = useState(() =>{
        if(window.localStorage.getItem(keyValue))
            return JSON.parse(window.localStorage.getItem(keyValue));
        
        window.localStorage.setItem(keyValue, JSON.stringify(initialValue));
        return initialValue;
    });

    const setValue = value =>{
        setStoredValue(value);
        window.localStorage.setItem(keyValue, JSON.stringify(value));
    };

    return [storedValue, setValue];
};