import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { hero, heroWrapper, columnOne, columnTwo, emphasizedText, infoMessage } from "./layout.module.css"
import HeroNewsletterForm from './forms/hero-newsletter-form';

const Hero = () => {
    return (
        <>
            <div className={heroWrapper}>
                <div className={hero}>
                    <div className={columnOne}>
                        <h1>The best <span className={emphasizedText}> breathwork</span> app is coming soon</h1>    
                        <h3 class={infoMessage}>The easiest way to <b>stay focused</b> 🤓, <b>stress less</b> 😌, <b>fall asleep</b> 😴 and <b>reduce anxiety</b> 🤗, all for free.</h3>    

                        <h2>👇 Be the first to get access once it launches</h2>    
                        <HeroNewsletterForm></HeroNewsletterForm>    
                    </div>

                    <div className={columnTwo}>
                    <StaticImage 
                        src="../images/app.png" 
                        alt="App" 
                        width={400}
                        />
                    </div>
                </div>
            </div>
        </>
  )
}

export default Hero