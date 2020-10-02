import React from "react"
import { Link } from "gatsby"

const Header = ({ children }) => (
  <div className="header container">
    <h1>
      { children }
    </h1>
  </div>
)

export default Header
