/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from './header';
import Emoji from './emoji';
import LinkedIn from '../images/linkedin_icon.png';
import GitHub from '../images/github_icon_2.svg';
import Gatsby from '../images/gatsby-icon.png';
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
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{ 
            background: `rgb(52,71,86)`,
            color: `#f6f6f6`,
            textDecoration: `none`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          <Emoji symbol="💜" label="purple heart" />
          &
          <a href="https://www.gatsbyjs.org"><img className="Gatsby" src={Gatsby}></img></a>
          <div>
            <a href="https://www.linkedin.com/in/megankob/" target="blank"><img className="LinkedIn" src={LinkedIn}></img></a>
            <a href="https://github.com/mk0b" target="blank"><img className="github" src={GitHub}></img></a>
          </div>
          
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
