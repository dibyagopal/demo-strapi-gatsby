import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CleversortFeatured from "../../assets/images/Cleversort-featured.png"
import IllustrationMobile from "../../assets/images/illustration-mobile.svg"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allStrapiProjects(limit: 3) {
        edges {
          node {
            id
            title
            short_description
            cover_image_small {
              publicURL
            }
          }
        }
      }
    }
  `);

  const blogs = data.allStrapiProjects.edges;
  //console.log(blogs)

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
        

        <section className="featuredContainer innerSection">
          <div className="wrapper">
            <h2>Featured Work</h2>
            <div className="featuredContWrap">
              <div className="featuredLeft">
                <ul>
                  <li className="active">
                    <h3>Cleversort</h3>
                    <p>Web &amp; Mobile / Task Management App</p>
                  </li>
                  <li>
                    <h3>InSkin Media</h3>
                    <p>Enterprise Cloud / Advertising and Media</p>
                  </li>
                  <li>
                    <h3>Evzdrop</h3>
                    <p>Mobile / Social Music Sharing App</p>
                  </li>
                </ul>
              </div>
              <div className="featuredDesc">
                <ul>
                  <li className="featuredOne active">
                    <div className="descContWrap">
                      <div className="descCont">
                        <h4>Cleversort</h4>
                        <p>Cleversort is a task management app that aims to simplify any workflow with unique features that facilitate efficiency, planning, and collaboration.</p>
                        <div className="techBlk">
                          <p><strong>Services:</strong> Web App, Native Mobile App, Website, UI/UX, Branding, Illustrations</p>
                          <p><strong>Core Technologies:</strong> Angular, Node.js, Firebase, NoSQL</p>
                        </div>
                      </div>
                      <div className="featuredImg"><img src={CleversortFeatured} alt /></div>
                    </div>
                    <div className="goDetail"><a className="readMore" href="#">Read Case Study</a></div>
                  </li>
                </ul>
              </div>
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
                  <li key={object.node.id}>
                    <div className="picWrap">
                      {object.node.cover_image_small != null &&
                        <img src={object.node.cover_image_small.publicURL} alt />
                      }
                      
                    </div>
                    <div className="expertiseDetail">
                      <h3>{object.node.title}</h3>
                      <p>{object.node.short_description}</p>
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
      
        <section className="architectureContainer innerSection">
          <div className="wrapper">
            <h2>Full Development &amp; Architecture</h2>
            <p className="subHead">With our technology-agnostic approach, we can provide reccommendation to counter any system challenges. All of our work is performed at the highest standard with your business goals in mind.</p>
            <h3>Technologies</h3>
            <div className="techNav">
              <ul>
                <li className="active"><a href="#">Mobile</a></li>
                <li><a href="#">Web</a></li>
                <li><a href="#">Data</a></li>
                <li><a href="#">Backend</a></li>
                <li><a href="#">Infrastructure</a></li>
                <li><a href="#">Serverless Solutions</a></li>
                <li><a href="#">Integration</a></li>
                <li><a href="#">Testing</a></li>
                <li><a href="#">DevOps</a></li>
                <li><a href="#">Analytics</a></li>
              </ul>
            </div>
            <div className="techDesc">
              <div className="illustrationBlk"><img src={IllustrationMobile} alt /></div>
              <ul>
                <li>iOS</li>
                <li>Android</li>
                <li>Ionic</li>
                <li>Swift</li>
                <li>Kotlin</li>
                <li>Java</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </section>

      
      </div>

  </Layout>
  )
}

export default IndexPage
