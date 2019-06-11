/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"

import "../styles/layout.scss"
import layoutStyles from '../styles/modules/layout.module.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          className={layoutStyles.container
          }
        >
          <div className={layoutStyles.content}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Menu />
            <main className={layoutStyles.main}>{children}</main>
            <br />
          </div>
          <Footer />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
