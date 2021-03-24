import React from "react"
import Logo from "../images/logo.svg"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div >
        <div>
          <div xs={12} md={4}>
            <img src={Logo} width="150px" />
          </div>
          <div xs={12} md={4}>
            <div>
              <div>
                <ul>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
                </ul>
              </div>
            </div>
          </div>
          <div xs={12} md={4}>
            <h4>Redes sociales</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
