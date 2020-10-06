import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <div className="container">
    <div className="wrapper">
      <div className="col col-1/4">
        <Link activeClassName="active" partiallyActive={true} to="/about-project">О проекте</Link>
        <Link activeClassName="active" partiallyActive={true} to="/">Контакты</Link>
        <Link activeClassName="active" partiallyActive={true} to="/">Как помочь проекту</Link>
      </div>
      <div className="col col-1/4">
        <Link activeClassName="active" partiallyActive={true} to="/">Получить помощь</Link>
        <Link activeClassName="active" partiallyActive={true} to="/clinics">Клиники</Link>
        <Link activeClassName="active" partiallyActive={true} to="/doctors">Врачи</Link>
        <Link activeClassName="active" partiallyActive={true} to="/">Психологи</Link>
        <Link activeClassName="active" partiallyActive={true} to="/diagnose">Самопомощь</Link>
      </div>
      <div className="col col-1/4">
        <Link activeClassName="active" partiallyActive={true} to="/about-cancer">О раке груди</Link>
        <Link activeClassName="active" partiallyActive={true} to="/">Что такое рак</Link>
        <Link activeClassName="active" partiallyActive={true} to="/causes">Причины</Link>
        <Link activeClassName="active" partiallyActive={true} to="/diagnose">Диагностика</Link>
        <Link activeClassName="active" partiallyActive={true} to="/treatment">Лечение</Link>
        <Link activeClassName="active" partiallyActive={true} to="/myth">Мифы</Link>
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
          <Link activeClassName="active" partiallyActive={true} to="/">vk</Link>
          <Link activeClassName="active" partiallyActive={true} to="/">instagram</Link>
          <Link activeClassName="active" partiallyActive={true} to="/">facebook</Link>
        </div> */}
      </div>
    </div>
  </div>
)

export default Footer
