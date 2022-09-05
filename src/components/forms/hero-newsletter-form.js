import React from 'react'

import { mcEmbedSignupScroll, formSubmitButton, formEmail, buttonContainer } from '../layout.module.css'


const HeroNewsletterForm = () => {
  return (
    <div>
        <div className='mc_signup'>
            <form action="https://sobreathe.us9.list-manage.com/subscribe/post?u=540965aba074785cbfc65894d&amp;id=710f879dd6&amp;f_id=002407e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div className={mcEmbedSignupScroll}>
                    <input className={formEmail} type="email" defaultValue="" name="EMAIL" placeholder="name@example.com" required />
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_540965aba074785cbfc65894d_710f879dd6" tabindex="-1" value="" /></div>
                    <div className={buttonContainer}><input class={formSubmitButton} type="submit" value="Sign Up 👉" name="subscribe" /></div>
                    </div>
            </form>
        </div>

    </div>
  )
}

export default HeroNewsletterForm