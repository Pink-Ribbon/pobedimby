import React from "react"
import { Link } from "gatsby"

const HeaderMain = () => (
  <div className="main-header container">
    <h1>
      Весте <strong>победим</strong><br />
      рак молочной железы
    </h1>
    <p>
      В Беларуси ежегодно около 4,5 тысячи женщин заболевают раком молочной железы.
      При ранней диагностике РМЖ излечивается почти в 100% случаев
    </p>
    <Link className="btn btn-pink" to="/">Пройти диагностику</Link>
    <Link className="btn" to="/">Оценить риски</Link>
  </div>
)

export default HeaderMain
