import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
    <Layout>
        <SEO title="Onze Diensten" />
        <h1>Over mij</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis minima enim nisi accusamus iusto! Porro possimus repellat labore, doloremque velit voluptate iusto necessitatibus explicabo animi rem iste aliquid accusamus, maiores officia! Cupiditate soluta, fugit corrupti aperiam laborum sunt nemo magni.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis minima enim nisi accusamus iusto! Porro possimus repellat labore, doloremque velit voluptate iusto necessitatibus explicabo animi rem iste aliquid accusamus, maiores officia! Cupiditate soluta, fugit corrupti aperiam laborum sunt nemo magni.</p>
        <Link to="/">Ga terug naar home vanuit Services</Link>
    </Layout>
)

export default ServicesPage