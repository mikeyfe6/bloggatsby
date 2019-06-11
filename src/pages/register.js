import React from "react"
import { Link } from "gatsby"
import UserForm from "../components/form/UserForm"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RegisterPage = () => (
    <Layout>
        <SEO title="Inschrijven" />
        <h1>Registeren</h1>
        <p>Hier kan je zodadelijk inschrijven...</p>
        <UserForm />
        <br />
        <Link to="/">Ga terug naar Home</Link>
    </Layout>
)

export default RegisterPage