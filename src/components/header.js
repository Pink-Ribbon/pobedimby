import React from "react"
import { Link } from "gatsby"
import Menu from './menu'

const Header = ({ title, description }) => (
  <div className="header container">
    <div className="flex-always">
      {/* <div className="menu">
        <Link className="col" to="/">Главная</Link>
        <Link className="col" to="/">О проекте</Link>
        <Link className="col" to="/">Получить помощь</Link>
        <Link className="col" to="/">О раке груди</Link>
      </div> */}
      <Menu />
      <div className="flex">
        <Link className="btn get-test" to="/quiz/">Пройти тест</Link>
        <span className="get-test-des hidden md:visible text-sm">
          Оцените риск <br />заболевания за 5 мин
        </span>
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
