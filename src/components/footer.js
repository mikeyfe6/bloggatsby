import React from 'react'
import footerStyles from '../styles/modules/footer.module.scss'
import { graphql, useStaticQuery } from 'gatsby'


const footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }`)

    return (
        <footer className={footerStyles.footer}>
            © {new Date().getFullYear()}, Gebouwd door de ONE and ONLY {"\xa0"}<a href="https://github.com/mikeyfe6">{data.site.siteMetadata.author}</a>
        </footer>
    )
}

export default footer
