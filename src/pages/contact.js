import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <h1>Contact Mij</h1>
        <p>Hier gaat onze contactformulier</p>

        <form name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            <input name="name" placeholder="Your Name" type="text" />
            <button>Send</button>
        </form>

        <Link to="/">Ga terug</Link>
    </Layout>
)

export default ContactPage