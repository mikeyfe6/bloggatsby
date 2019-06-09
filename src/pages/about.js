import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About Me" />
        <h1>Over mij</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis minima enim nisi accusamus iusto! Porro possimus repellat labore, doloremque velit voluptate iusto necessitatibus explicabo animi rem iste aliquid accusamus, maiores officia! Cupiditate soluta, fugit corrupti aperiam laborum sunt nemo magni.</p>
        <Link to="/">Ga terug naar home vanuit Over Mij</Link>
    </Layout>
)

export default AboutPage