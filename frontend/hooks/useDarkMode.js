import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (keyValue) =>{
    const [isDark, setIsDark] = useLocalStorage(keyValue, false);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };

    return [isDark, toggleDarkMode];
};