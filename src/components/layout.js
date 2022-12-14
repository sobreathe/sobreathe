import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { 
    container,
    footerLinks,
    footerLinkItem,
    footerLinkText,
    footerCopyrightText
} from "./layout.module.css";

import logo from '../images/logo.svg'


const Layout = ({ children }) => {
    return (
        <div className={container}>
            <header>
                <Link to="/"><img src={logo} width={160} alt="logo" /></Link>
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* <ul className={footerLinks}>
                    <li className={footerLinkItem}><Link to="/" className={footerLinkText}>Home</Link></li>
                    <li className={footerLinkItem}><Link to="/terms-and-conditions" className={footerLinkText}>Terms and Conditions</Link></li>
                    <li className={footerLinkItem}><Link to="/privacy-policy" className={footerLinkText}>Privacy Policy</Link></li>
                </ul> */}
                <p className={footerCopyrightText}>© So Breathe {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}


export default Layout