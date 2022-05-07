import React from "react";
import arrow from "../images/icon-arrow-down.svg"
import desktopImage from '../images/illustration-woman-online-desktop.svg';
import desktopBox from '../images/illustration-box-desktop.svg';
import mobileImage from '../images/illustration-woman-online-mobile.svg';
import mobileShadow from '../images/bg-pattern-mobile.svg';
import desktopShadow from '../images/bg-pattern-desktop.svg';

// Woman Image change depending on viewport width

function HeroImageViewer() {
  return (
  <div className='hero-image'>
  {/* Woman Image */}
  <picture>
    <source media='(min-width: 1440px)' srcSet={desktopImage}></source>
    <img className='mobile-hero' src={mobileImage} alt='woman working'></img>
  </picture>
  {/* Desktop Box */}
  <picture>
    <source media="(min-width: 1440px)" srcSet={desktopBox}></source>
    <img alt=""></img>
  </picture>
  {/* Shadow */}
  <picture>
    <source media="(min-width: 1440px)" srcSet={desktopShadow}></source>
    <img className="mobile-shadow" src={mobileShadow} alt="mobile shadow"></img>
  </picture>
</div>)
};


// Q and A 

function QA(props) {
  return (
    <div className="QA">
      <h2 className="pb-2 pr-2 text-[14px] 
      hover:text-softRed">{props.question}
        <img className="float-right cursor-pointer" 
          src={arrow} alt="arrow pointing down">
        </img>
      </h2>
      <p className="text-darkGrayishBlue hidden">{props.answer}
      </p>
      <div className="divider"></div>
    </div>
  );
};

// Main body 

export default function Main() {
  return (
  
  <div className="main-container">

  <HeroImageViewer/>

  <h1 className="p-6 text-3xl font-bold text-center">FAQ</h1>

  <QA question="How many team members can I invite?" 
  answer="You can invite up to 2 additional users on the Free plan.
          There is no limit on team members for the Premium plan."
          />
  <QA question="What is the maximum file upload size?" 
  answer="No more than 2GB. 
          All files in your account must fit your 
          allotted storage space."
          />   
  <QA question="How do I reset my password?" 
  answer="Click “Forgot password” from the login page or 
        “Change password” from your profile page. 
        A reset link will be emailed to you."
          />
  <QA question="Can I cancel my subscription?" 
  answer="Yes! Send us a message and we’ll process your 
        request no questions asked."
          />
  <QA question="Do you provide additional support?" 
  answer="Chat and email support is available 24/7. 
        Phone lines are open during normal business hours."
          />     
  </div>)
};