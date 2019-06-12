import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi mensen</h1>
    <h2>Welkom bij mijn website in development</h2>
    <p>Deze website gaat zwaar ge-edited worden.</p>
    <main></main>


    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image /> 
    </div>*/}
    <Link to="/blog/">Ga naar mijn Blogs</Link>
  </Layout>
)

export default IndexPage
