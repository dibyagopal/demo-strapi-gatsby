import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Careers = () => (
  <Layout>
    <SEO title="Careers" />
    <div className="contentWrapper">
      <section className="staticContainer innerSection">
      <h1>Careers</h1>
      <p>Careers Page view</p>
      <Link to="/">Go back to the homepage</Link><br></br><br></br>
      <Link to="/contact-us">Go back to contact us</Link>
      </section>
    </div>
  </Layout>
)

export default Careers
