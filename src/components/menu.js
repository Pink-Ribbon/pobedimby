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
        <Link activeClassName="active" className="col" to="/">Главная</Link>
        <Link activeClassName="active" partiallyActive={true} className="col" to="/about-project">О проекте</Link>
        <Link activeClassName="active" partiallyActive={true} className="col" to="/diagnose">Получить помощь</Link>
        <Link activeClassName="active" partiallyActive={true} className="col" to="/about-cancer">О раке груди</Link>
      </div>
    </div>
  );
}

export default Menu
