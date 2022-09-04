import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { hero, heroWrapper, columnOne, columnTwo } from "./layout.module.css"
import HeroNewsletterForm from './forms/hero-newsletter-form';

const Hero = () => {
    return (
        <>
            <div className={heroWrapper}>
                <div className={hero}>
                    <div className={columnOne}>
                        <h1>The best app for breathing is coming soon</h1>    
                        <h2>Be the first to get access once it launches</h2>    
                        <HeroNewsletterForm></HeroNewsletterForm>    
                    </div>

                    <div className={columnTwo}>
                    <StaticImage 
                        src="../images/app.png" 
                        alt="App" 
                        // min-width={300}
                        />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Hero