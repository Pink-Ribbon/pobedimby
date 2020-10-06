import React from "react"
import HeaderMain from './header-main'
import Footer from './footer'
import Menu from './menu'

const Layout = ({ location, title, description, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  if (isRootPath) {
    header = <HeaderMain />
  } else {
    header = ''
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header space-y">
        <Menu />
        {header}
      </header>
      <main className="container space-y">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
