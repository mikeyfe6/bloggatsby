import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi mensen</h1>
    <p>Dit is mijn eerste blog website.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image /> 
    </div>*/}
    <Link to="/about/">Over mij</Link>
  </Layout>
)

export default IndexPage
