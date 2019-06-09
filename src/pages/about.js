import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About Me" />
        <h1>Over mij</h1>
        <p>Een beetje info over ons...</p>
        <Link to="/">Ga terug naar home vanuit Over Mij</Link>
    </Layout>
)

export default AboutPage