import React from "react"
import {Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allStrapiBlogs(limit: 3) {
        edges {
          node {
            id
            name
            slug
            Description
            categories {
              id
              name
            }
            image {
              name
              publicURL
            }
          }
        }
      }
    }
  `);

  const blogs = data.allStrapiBlogs.edges;
  console.log(blogs)

  return (
  <Layout>
    <SEO title="Digital Avenues Limited" />
      <div className="contentWrapper">
        <section className="staticContainer innerSection">
          <div className="wrapper">
            <h2>Nimble. Savvy. Seasoned.</h2>
            <p className="subHead">Digital Avenues is a team of builders and creators. With 20 years of experience behind us, we provide custom software that is designed to transform your business.</p>
            <div className="quickDesc">
              <ul>
                <li>
                  <div className="secCount">60<span>+</span></div>
                  <div>Team<br /> Members</div>
                </li>
                <li>
                  <div className="secCount">15<span>+</span></div>
                  <div>Mobile Apps<br />
                    CREATED</div>
                </li>
                <li>
                  <div className="secCount">400<span>+</span></div>
                  <div>Web Projects<br />
                    DEVELOPED</div>
                </li>
                <li>
                  <div className="secCount">XX<span>+</span></div>
                  <div>Software solutions<br />
                    provided</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="expertiseContainer innerSection">
          <div className="wrapper">
            <div className="outerHeading">Our Expertise</div>
            <h2>Mobile and Web Solutions</h2>
            <p className="subHead">Whether it’s a web-based app, mobile app, or an app for use across all mobile operating systems, we can build the solutions you need.</p>
            <div className="expertiseBlkWrap">
              <ul>
                {blogs.map((object) => {
                return (
                  <li>
                    <div className="picWrap">
                      {object.node.image != null &&
                        <img src={object.node.image.publicURL} alt />
                      }
                      
                    </div>
                    <div className="expertiseDetail">
                      <h3>{object.node.name}</h3>
                      <p>{object.node.Description}</p>
                      <a href="#" className="seeDetail">See the work</a>
                    </div>
                  </li>
                );
                })}
                {/* <li>
                  <div className="picWrap"><img src="images/pic.jpg" alt /></div>
                  <div className="expertiseDetail">
                    <h3>Bare</h3>
                    <p>Bare is a fast-growing healthy snacks and chips company.</p>
                    <a href="#" className="seeDetail">See the work</a>
                  </div>
                </li>
                <li>
                  <div className="picWrap"><img src="images/pic.jpg" alt /></div>
                  <div className="expertiseDetail">
                    <h3>Vietnam Artist</h3>
                    <p>Vietnam Artist is an online gallery featuring original paintings by Vietnamese artists.</p>
                    <a href="#" className="seeDetail">See the work</a>
                  </div>
                </li>
                <li>
                  <div className="picWrap"><img src="images/pic.jpg" alt /></div>
                  <div className="expertiseDetail">
                    <h3>Johnson &amp; Johnson</h3>
                    <p>The J&amp; J Wound Care Resource App helps identify, track and provide recommendations on wound care treatments.</p>
                    <a href="#" className="seeDetail">See the work</a>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
      </div>

  </Layout>
  )
}

export default IndexPage
