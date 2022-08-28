import React from 'react'
import Person1 from "./../assets/AfterLogin.png"

import Style from "./../modules/ContentHome.module.css"

export function ContentHome() {
  return (
    <div className={Style.container}>
  <img src={Person1} alt="Avatar" className={Style.image}/>
  <div className={Style.middle}>
    <div className={Style.text}>
      <a>Hi Litesh</a>
    </div>
  </div>
</div>
  )
}
