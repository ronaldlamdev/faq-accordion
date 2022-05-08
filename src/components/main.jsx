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

// Display answer

const displayAnswer1 = () => {
  const arrow1 = document.getElementById('arrNo1');
  const question1 = document.getElementById('qNo1');
  const answer1 = document.getElementById('aNo1');
  arrow1.classList.toggle('rotate-180');
  question1.classList.toggle('font-[700]');
  answer1.classList.toggle('hidden');
}

const displayAnswer2 = () => {
  const arrow2 = document.getElementById('arrNo2');
  const question2 = document.getElementById('qNo2');
  const answer2 = document.getElementById('aNo2');
  arrow2.classList.toggle('rotate-180');
  question2.classList.toggle('font-[700]');
  answer2.classList.toggle('hidden');
}

const displayAnswer3 = () => {
  const arrow3 = document.getElementById('arrNo3');
  const question3 = document.getElementById('qNo3');
  const answer3 = document.getElementById('aNo3');
  arrow3.classList.toggle('rotate-180');
  question3.classList.toggle('font-[700]');
  answer3.classList.toggle('hidden');
}

const displayAnswer4 = () => {
  const arrow4 = document.getElementById('arrNo4');
  const question4 = document.getElementById('qNo4');
  const answer4 = document.getElementById('aNo4');
  arrow4.classList.toggle('rotate-180');
  question4.classList.toggle('font-[700]');
  answer4.classList.toggle('hidden');
}

const displayAnswer5 = () => {
  const arrow5 = document.getElementById('arrNo5');
  const question5 = document.getElementById('qNo5');
  const answer5 = document.getElementById('aNo5');
  arrow5.classList.toggle('rotate-180');
  question5.classList.toggle('font-[700]');
  answer5.classList.toggle('hidden');
}





// Q and A 

function QA(props) {
  return (
    <div className="QA">
      <h2 id={props.qNo} className="pb-2 pr-2 text-[14px] 
      hover:text-softRed questionHeading">{props.question}
        <img className="float-right cursor-pointer arrowImg" 
          src={arrow} onClick={props.rotator} id={props.arrNo} alt="arrow pointing down">
        </img>
      </h2>
      <p id={props.aNo} className="text-darkGrayishBlue hidden answerPara">{props.answer}
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
          qNo = 'qNo1'
          arrNo = 'arrNo1'
          aNo = 'aNo1'
          rotator = {displayAnswer1}
          />
  <QA question="What is the maximum file upload size?" 
  answer="No more than 2GB. 
          All files in your account must fit your 
          allotted storage space."
          qNo = 'qNo2'
          arrNo = 'arrNo2'
          aNo = 'aNo2'
          rotator = {displayAnswer2}
          />   
  <QA question="How do I reset my password?" 
  answer="Click “Forgot password” from the login page or 
        “Change password” from your profile page. 
        A reset link will be emailed to you."
          qNo = 'qNo3'
          arrNo = 'arrNo3'
          aNo = 'aNo3'
          rotator = {displayAnswer3}
          />
  <QA question="Can I cancel my subscription?" 
  answer="Yes! Send us a message and we’ll process your 
        request no questions asked."
          qNo = 'qNo4'
          arrNo = 'arrNo4'
          aNo = 'aNo4'
          rotator = {displayAnswer4}
          />
  <QA question="Do you provide additional support?" 
  answer="Chat and email support is available 24/7. 
        Phone lines are open during normal business hours."
          qNo = 'qNo5'
          arrNo = 'arrNo5'
          aNo = 'aNo5'
          rotator = {displayAnswer5}
          />     
  </div>)
};