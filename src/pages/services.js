import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
    <Layout>
        <SEO title="Onze Diensten" />
        <h1>Services</h1>
        <p>Hier gaan onze diensten komen te staan...</p>
        <Link to="/">Ga terug naar Home</Link>
    </Layout>
)

export default ServicesPage