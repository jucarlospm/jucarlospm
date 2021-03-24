import React from "react"
import Header from "./header"
import Footer from "./footer"
import GlobalStyles from './styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
        <div className="body-jucarlospm">
          {children}
        </div>
      <Footer/>
    </>
  )
}

export default Layout
