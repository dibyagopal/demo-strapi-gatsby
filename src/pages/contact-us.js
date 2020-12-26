import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="contentWrapper">
      <section className="staticContainer innerSection">
      <h1>Contact Us</h1>
      <p>Contact Us page </p>
      <Link to="/">Go back to the homepage</Link>
      <Link to="/about-us">Go back to about us</Link>
      </section>
    </div>
  </Layout>
)

export default SecondPage
