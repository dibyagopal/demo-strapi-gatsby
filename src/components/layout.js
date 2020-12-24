/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import Header from "./includes/siteHeader"
import Footer from "./includes/siteFooter"
import "../../assets/css/custom.css"


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
    <React.Fragment>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="outerWrapper">
        <div className="mainContainer">
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </React.Fragment>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
