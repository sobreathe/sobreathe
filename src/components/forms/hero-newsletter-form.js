import React from 'react'

import { mcForm, formSubmitButton, formEmail } from '../layout.module.css'


const HeroNewsletterForm = () => {
  return (
      <div>
          <form className={mcForm} action="https://sobreathe.us9.list-manage.com/subscribe/post?u=540965aba074785cbfc65894d&amp;id=710f879dd6&amp;f_id=002407e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
              <input className={formEmail} type="email" defaultValue="" name="EMAIL" placeholder="your@email.com" required />
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_540965aba074785cbfc65894d_710f879dd6" tabindex="-1" value="" /></div>
              <input className={formSubmitButton} type="submit" value="Sign Up 👉" name="subscribe" />
          </form>
      </div>

  )
}

export default HeroNewsletterForm