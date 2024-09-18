import React from 'react'
import useLocalStroage from "./useLocalStorage";
import './styles.css'

function MainThemeChanger() {
    const [theme, setTheme] = useLocalStroage("theme", "dark");

    function handleToggleTheme() {
      setTheme(theme === "light" ? "dark" : "light");
    }
  
    console.log(theme);
  
    return (
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Hello World !</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>
    );
}

export default MainThemeChanger