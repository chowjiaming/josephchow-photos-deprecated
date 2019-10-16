import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="ABout"
        keywords={[
          `about`,
          `gatsby`,
          `photography`,
          `joseph chow`,
          `pixel`,
          `pixel 2`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Hello! My name is Joseph and I have owned a Pixel 2XL since it came
            out. Here I am with my phone!
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Me in my work bathroom</figcaption>
          </figure>
          <h3 id="dynamic-styles">About me</h3>
          <p>
            Like most, I was very impressed with the camera's capabilities,
            expecially the extreme dynamic range.
          </p>
          <p>
            They say that the best camera you own is the one you are currently
            holding. My phone follows me essentially wherever I go, allowing me
            to basically capture things as I see them. I decided to make a small
            photo journal to show off the Pixel 2's amazing camera.
          </p>
          <p>
            If you like what you see, and would like to more of what the best of
            smartphone cameras can do?{" "}
            <a href="https://docs.ghost.org/integrations/">Click here</a> to
            donate to my Pixel 4 fund!
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
