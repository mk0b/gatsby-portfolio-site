import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgb(52,71,86)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{ margin: 20 }}>
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
            float: 'right',
          }}
          >
          About
        </Link>
      </h3>
      <h3 style={{ margin: 20 }}>
        <Link
          to="/portfolio"
          style={{
            color: 'white',
            textDecoration: 'none',
            float: 'right',
          }}
          >
          Portfolio
        </Link>
        </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
