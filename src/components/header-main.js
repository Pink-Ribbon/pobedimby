import React from "react"
import { Link } from "gatsby"

const HeaderMain = () => (
  <div className="main-header container space-y">
    <h1 className="title col-1/2">
      Вместе <strong>победим</strong><br />
      рак молочной железы
    </h1>
    <div className="image-container" />
    <p className="space-y col-1/2">
      В Беларуси ежегодно около 4,5 тысячи женщин заболевают раком молочной железы.
      При ранней диагностике РМЖ излечивается почти в 100% случаев
    </p>
    <div className="header-buttons space-y">
      <Link className="col btn btn-pink" to="/diagnose">Пройти диагностику</Link>
      <Link className="col btn" to="/quiz">Оценить риски</Link>
    </div>
  </div>
)

export default HeaderMain
