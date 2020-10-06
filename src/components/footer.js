import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <div className="container">
    <div className="wrapper">
      <div className="col col-1/4">
        <Link to="/about-project">О проекте</Link>
        <Link to="/">Контакты</Link>
        <Link to="/">Как помочь проекту</Link>
      </div>
      <div className="col col-1/4">
        <Link to="/">Получить помощь</Link>
        <Link to="/clinics">Клиники</Link>
        <Link to="/doctors">Врачи</Link>
        <Link to="/">Психологи</Link>
        <Link to="/diagnose">Самопомощь</Link>
      </div>
      <div className="col col-1/4">
        <Link to="/about-cancer">О раке груди</Link>
        <Link to="/">Что такое рак</Link>
        <Link to="/causes">Причины</Link>
        <Link to="/diagnose">Диагностика</Link>
        <Link to="/treatment">Лечение</Link>
        <Link to="/myth">Мифы</Link>
      </div>
      <div className="col col-1/4">
        <div className="copyright">
          © 2020 pobedim.by
          {/* EPAM Systems, Inc */}
        </div>
        <div className="rights">
          All Rights Reserved
        </div>
        {/* <div className="share">
          <Link to="/">vk</Link>
          <Link to="/">instagram</Link>
          <Link to="/">facebook</Link>
        </div> */}
      </div>
    </div>
  </div>
)

export default Footer
