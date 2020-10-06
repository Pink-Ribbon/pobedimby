import React from "react"
import { Link } from "gatsby"
import Menu from './menu'

const Header = ({ title, description }) => (
  <div className="header container">
    <Menu />
    {/* <h1>
      { title }
    </h1>
    <p className="col-1/2 space-y">
      { description }
    </p> */}
  </div>
)

export default Header
