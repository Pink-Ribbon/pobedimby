import React, { useState } from "react"
import { Link } from "gatsby"

const Menu = () => {
  const [ active, setActive ] = useState('');
  const toggleActive = () => active === 'expanded' ? setActive('') : setActive('expanded');

  return (
    <div className="flex-always container menu-wrapper">
      <div className={`menu ${active}`}>
        <span 
          className="btn menu-toggle sm:hidden"
          onClick={toggleActive}
        >
          <span className="hamburger" />
          <span className="hamburger" />
          <span className="hamburger" />
        </span>
        <div className="menu-links hidden sm:visible">
          <Link activeClassName="active" className="" to="/">Главная</Link>
          <Link activeClassName="active" partiallyActive={true} className="" to="/about-project">О проекте</Link>
          <Link activeClassName="active" partiallyActive={true} className="" to="/diagnose">Получить помощь</Link>
          <Link activeClassName="active" partiallyActive={true} className="" to="/about-cancer">О раке груди</Link>
        </div>
      </div>
    </div>
  );
}

export default Menu
