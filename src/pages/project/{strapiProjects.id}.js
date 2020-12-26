import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"




const SecondPage = ({data, pageContext}) => {


  // function GetDataId(id){
  //   const dataVal = useStaticQuery(graphql`
  //   query {
  //     strapiProjects(id: {eq: "Projects_3"}) {
  //       id
  //       title
  //       short_description
  //       cover_image_small {
  //         publicURL
  //       }
  //     }
  //   }
  // `);
  //   return dataVal;
  // }

 

  //let data = getDataId(pageContext.id);

  let projectData = data.strapiProjects;

  return(
    <Layout>
        <SEO title={projectData.title} />
        <div className="contentWrapper">
          <section className="staticContainer innerSection">
          <h1>{projectData.title}</h1>
          <p>{projectData.short_description}</p>
          <div className="expertiseBlkWrap">
            <img src={projectData.cover_image_small.publicURL} alt="Image" style={{width: 400}} />
          </div>
          
          <Link to="/">Go back to the homepage</Link><br></br><br></br>
          <Link to="/contact-us">Go back to contact us</Link>
          </section>
        </div>
    </Layout>
  )
  
}

export const query = graphql`
  query($id: String){
    strapiProjects(id: {eq: $id}) {
      id
      title
      short_description
      cover_image_small {
        publicURL
      }
    }
  }
`

export default SecondPage