import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <h1>Contact Mij</h1>
        <p>Hier gaat onze contactformulier</p>

        <form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="7" />
            </div>
            <div className="field">
                <label htmlFor="file">Upload File</label>
                <input type="file" name="myfile" id="myfile" rows="7" />
            </div>
            <div className="field">
                <div data-netlify-recaptcha="true"></div>
            </div>
            <ul className="actions">
                <li>
                    <input type="submit" value="Send Message" className="special" />
                </li>
                <li>
                    <input type="reset" value="Clear" />
                </li>
            </ul>
        </form>

        <Link to="/">Ga terug naar Home</Link>
    </Layout>
)

export default ContactPage