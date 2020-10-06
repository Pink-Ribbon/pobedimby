import React, { useState } from "react"
import { Link } from "gatsby"

const Menu = () => {
  const [ active, setActive ] = useState('');

  const toggleActive = () => active === 'active' ? setActive('') : setActive('active');

  return (
    <div className={`menu ${active}`}>
      <a className="btn menu-toggle sm:hidden" onClick={toggleActive}>
        <span className="hamburger" />
        <span className="hamburger" />
        <span className="hamburger" />
      </a>
      <div className="menu-links hidden sm:visible">
        <Link className="col" to="/">Главная</Link>
        <Link className="col" to="/">О проекте</Link>
        <Link className="col" to="/">Получить помощь</Link>
        <Link className="col" to="/">О раке груди</Link>
      </div>
    </div>
  );
}

export default Menu
