import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from '../styles/modules/header.module.scss'


const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}
  >
    <div
      className={headerStyles.content}
    >
      <h1 className={headerStyles.logo}>
        <Link className={headerStyles.link}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <p>Deze site gaat de wereld veranderen!</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Wat is dit`,
}

export default Header
