import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import { 
    container,
    footerLinks,
    footerLinkItem,
    footerLinkText
} from "./layout.module.css";


const Layout = ({ children }) => {
    return (
        <div className={container}>
            <header>
                <StaticImage 
                src="../images/logo.svg" 
                alt="logo" 
                placeholder="blurred"
                width={160}
                />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <ul className={footerLinks}>
                    <li className={footerLinkItem}><Link to="/" className={footerLinkText}>Home</Link></li>
                    <li className={footerLinkItem}><Link to="/terms-and-conditions" className={footerLinkText}>Terms and Conditions</Link></li>
                    <li className={footerLinkItem}><Link to="/privacy-policy" className={footerLinkText}>Privacy Policy</Link></li>
                </ul>
                <p>© So Breathe {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}


export default Layout