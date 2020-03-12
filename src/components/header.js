import PropTypes from "prop-types";
import React from "react";

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
        textAlign: 'center',
      }}
    >
      <h1 
        style={{ 
          margin: 0,
          color: `#f6f6f6`,     
        }}>
          {siteTitle}
      </h1>
      <p
        style={{
          paddingTop: '20px',
          color: `#f6f6f6`,
          margin: 0,
        }}
      >
        Developer | Wanderer | Community Builder | Dancer | Animal Lover | Life Long Learner
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
