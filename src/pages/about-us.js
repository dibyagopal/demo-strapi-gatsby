import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="contentWrapper">
      <section className="staticContainer innerSection">
      <h1>About Us</h1>
      <p>About Us page view</p>
      <Link to="/">Go back to the homepage</Link><br></br><br></br>
      <Link to="/contact-us">Go back to contact us</Link>
      </section>
    </div>
  </Layout>
)

export default SecondPage
