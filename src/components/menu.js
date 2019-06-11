import React from "react"
import { Link } from "gatsby"

import menuStyles from '../styles/modules/menu.module.scss'


const Menu = () => (
    <div className={menuStyles.navWrapper}>

        <ul className={menuStyles.navList}>

            <li><Link className={menuStyles.navItem} to="/">Home</Link></li>
            <li><Link className={menuStyles.navItem} to="/about">Over Mij</Link></li>
            <li><Link className={menuStyles.navItem} to="/services">Services</Link></li>
            <li><Link className={menuStyles.navItem} to="/blog">Blog</Link></li>
            <li><Link className={menuStyles.navItem} to="/contact">Contact</Link></li>
            <li><Link className={menuStyles.navItem} to="/register">Inschrijven</Link></li>

        </ul>
    </div>
)

export default Menu;
