import React from "react"
import { Link } from "gatsby"

const Header = ({ title, description }) => (
  <div className="header container">
    <div className="flex-always">
      <div className="menu">
        <Link className="col" to="/">Главная</Link>
        <Link className="col" to="/">О проекте</Link>
        <Link className="col" to="/">Получить помощь</Link>
        <Link className="col" to="/">О раке груди</Link>
      </div>
      <div>
        <Link className="btn get-test" to="/quiz/">Пройти тест</Link>
      </div>
    </div>
    {/* <h1>
      { title }
    </h1>
    <p className="col-1/2 space-y">
      { description }
    </p> */}
  </div>
)

export default Header
