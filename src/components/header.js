import PropTypes from "prop-types";
import React from "react";

import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github_icon_2.svg';
import Treehouse from '../images/treehouse_icon.png';

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
        paddingTop: '10px',
        paddingBottom: '0px',
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
      <div className="footer-icons-social-header">
            <span><a href="https://teamtreehouse.com/megankatherineobrien" target="blank"><img className="footer-icons" src={Treehouse} alt="Treehouse clickable logo."></img></a></span>
            <span><a href="https://github.com/mk0b" target="blank"><img className="footer-icons" src={GitHub} alt="Github clickable logo."></img></a></span>
            <span><a href="https://www.linkedin.com/in/megankob/" target="blank"><img className="footer-icons" src={LinkedIn} alt="LinkedIn clickable logo."></img></a></span>
          </div>
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
