import React from "react";
import desktopImage from '../images/illustration-woman-online-desktop.svg'
import mobileImage from '../images/illustration-woman-online-mobile.svg'

export default function heroImageViewer() {
  return (<div className='hero-image'>
  <picture>
    <source media='(min-width: 1440px)' srcSet={desktopImage}></source>
    <img src={mobileImage} alt='woman working'></img>
  </picture>
</div>)
};