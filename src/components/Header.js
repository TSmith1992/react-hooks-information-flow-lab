import React from "react"

function Header({onDarkModeClick, darkModeCheck}){
    return(
    <header>
    <h2>Shopster</h2>
    <button onClick={onDarkModeClick}>
        {darkModeCheck? "Dark" :"Light"} Mode
      {/*{isDarkMode ? "Dark" : "Light"} Mode */}
    </button>
  </header>
    )
}
export default Header;