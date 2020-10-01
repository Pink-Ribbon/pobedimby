import React from "react"
import { Link } from "gatsby"
import HeaderMain from './header-main'
import Footer from './footer'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = <HeaderMain />
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main className="container">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
