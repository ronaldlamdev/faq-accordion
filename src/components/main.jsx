import React from "react";
import arrow from "../images/icon-arrow-down.svg"



export default function Main() {
  return (
  
  <div className="main-container bg-white w-10/12 mx-auto">

  <h1>FAQ</h1>

  <ul className="question">
    How many team members can I invite?
    <img src={arrow} alt="arrow pointing down"></img>
        <li className="answer">
          You can invite up to 2 additional users on the Free plan.
          There is no limit on team members for the Premium plan.
        </li>
  </ul>

  <ul className="question">
    What is the maximum file upload size?
      <img src={arrow} alt="arrow pointing down"></img>
        <li className="answer">
          No more than 2GB. 
          All files in your account must fit your 
          allotted storage space.
        </li>
  </ul>

  <ul className="question">
    How do I reset my password?
      <img src={arrow} alt="arrow pointing down"></img>
        <li className="answer">
        Click “Forgot password” from the login page or 
        “Change password” from your profile page. 
        A reset link will be emailed to you.
        </li>
  </ul>

  <ul className="question">
    Can I cancel my subscription?
      <img src={arrow} alt="arrow pointing down"></img>
        <li className="answer">
        Yes! Send us a message and we’ll process your 
        request no questions asked.
        </li>
  </ul>

  <ul className="question">
    Do you provide additional support?
      <img src={arrow} alt="arrow pointing down"></img>
        <li className="answer">
        Chat and email support is available 24/7. 
        Phone lines are open during normal business hours.
        </li>
  </ul>
  </div>)
}