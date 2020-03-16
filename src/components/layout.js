/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Emoji from './emoji';
import Projects from './Projects';

import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github_icon_2.svg';
import Gatsby from '../images/gatsby-icon.png';
import Treehouse from '../images/treehouse_icon.png';
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '95%',
          padding: `0 1.0875rem 1.rem`,
        }}
      >
        <h2 className="my-work-header"
          style={{
            color: `rgb(52,71,86)`,
            textAlign: 'center',
            padding: '5px',
          }}
        >
        JavaScript Projects
        </h2>
        <hr style={{
          color: `rgb(52,71,86)`,
          borderTop: '1px solid',
        }}/>
        <main>
          <Projects />
        </main>
        <hr style={{
          color: `rgb(52,71,86)`,
          borderTop: '1px solid',
        }}/>
        <footer
          style={{ 
            color: `rgb(52,71,86)`,
            textDecoration: `none`,
          }}
        >
          © {new Date().getFullYear()}| Made with
          <Emoji symbol="💜" label="purple heart" />
          &
          <div className="gatsby-icon-source-code-icon">
            <span><a href="https://www.gatsbyjs.org" target="blank"><img className="footer-icons-left" src={Gatsby} alt="Gatsby clickable logo."></img></a></span>
            | Source Code:
            <span><a href="https://github.com/mk0b/gatsby-portfolio-site" target="blank"><img className="footer-icons-left" src={GitHub} alt="Github clickable logo."></img></a></span>
          </div>
          <div className="footer-icons-social">
            <span><a href="https://teamtreehouse.com/megankatherineobrien" target="blank"><img className="footer-icons" src={Treehouse} alt="Treehouse clickable logo."></img></a></span>
            <span><a href="https://github.com/mk0b" target="blank"><img className="footer-icons" src={GitHub} alt="Github clickable logo."></img></a></span>
            <span><a href="https://www.linkedin.com/in/megankob/" target="blank"><img className="footer-icons" src={LinkedIn} alt="LinkedIn clickable logo."></img></a></span>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
