import React from 'react'
import footerStyles from '../styles/modules/footer.module.scss'


const footer = () => {
    return (
        <footer className={footerStyles.footer}>
            © {new Date().getFullYear()}, Gebouwd door de ONE and ONLY {"\xa0"}<a href="https://github.com/mikeyfe6">mikeyfe6.</a>
        </footer>
    )
}

export default footer
