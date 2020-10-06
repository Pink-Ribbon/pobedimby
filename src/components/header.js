import React from "react"
import { Link } from "gatsby"
import Menu from './menu'

const Header = ({ title, description }) => (
  <div className="header container">
    <div className="flex-always">
      <Menu />
      <div className="flex">
        <Link activeClassName="active" partiallyActive={true} className="btn get-test" to="/quiz/">Пройти тест</Link>
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
