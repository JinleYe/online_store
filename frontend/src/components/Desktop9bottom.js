import TextField from "@mui/material/TextField";
// import * as React from "react";
import React, { useState } from "react";

import "./Desktop9bottom.css";
// import Button from "@mui/material/Button";
import contactimage from './contactimages/contactimage.png'


import './Desktop9bottom.css';


function Desktop9bottom() {

  // Change button color on click
  const [isActive, setIsActive] = useState(false);

  //change button text onclick

 const [buttonText, setButtonText] = useState('Send Mail');

  //handle function:
  const handleSendmailClick = (event) => {
  
    alert("Sending...");
    setIsActive(current => !current);
    setButtonText('Mail sent!');

  }


  return (
    <>
    <div className="desktop9-bot">

        <div className="l-grid">
        <div className="bottomheader">
        <h2 id= "getintouch"> Get In touch!</h2>
        <div className="contact-column1">
           
           <p id='getintouchsubheader'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
           </p>  
       </div>
      </div>
    </div>

    {/* FORM */}

    <div className="parent">
    <div className="getintouchform">
      <form>
        <TextField id="yourname"
          label="Your Name"
          required
          style={{
            minWidth: "260px",
            minHeight: "30px",
            left:"3.7em"

          }}/>
          
          
        <TextField  type="email" 
          label="Your E-mail"
          required
          style={{
            minWidth: "260px",
            minHeight: "30px",
            left:"5em"
          
        
          }}
        />
        <br /> <br /><br />
        <TextField id="subjectbox"
          label="Subject"
          required
          style={{
            minWidth: "546px",
            minHeight: "30px",
            left:"4.4em"
          }}
        />{" "}
        <br /> <br /><br />
        <div>
        <TextField id="yourmessage"
          label="Type Your Message"
          required
          type="textarea"
          multiline = {true}

          style={{
            minWidth: "546px",
            minHeight: "30px",
            left:"4.4em",
            
          }}

        />{" "}
       
       </div>
     
        {/* <a href="https://google.com" target="_blank" >Learn more.</a> */}
    
        <br /><br /> <br /><br/>

        

      <button id="sendmail" style={{
                    borderRadius: 5,
                    fontSize: "16px",
                    backgroundColor: isActive ? 'greenyellow' : '',color: isActive ? 'blue' : '',
          
                    }
                    }onClick={handleSendmailClick} >{buttonText}</button>
      </form>
    </div>

    <img id= "contactimage"src={contactimage}  alt="Contact us image"/>



    </div >













          {/* <div className="getintouch-container">
          
            <div className="getintouch-form-container">
                <h2 id = "getintouchtext">Sign up</h2>

            <form className="getintouch-form" onSubmit={onSubmit}>
            <p className="signin-label">Name: </p>
                <div className="signin-item">
                        <input className="signinBox"
                         type="text"
                        name="name" />
                
                </div>
      
            <p className="signin-label">Email: </p>
                <div className="signin-item">
                        <input className="signinBox"
                         type="text"
                        name="username"/>
                
                </div>

                <p className="signin-label">Password: </p>

                 <div className="signin-item">
                        <input className="signinBox"
                         type="text"
                        name="password"/>
                  </div>

                    <button className="button"type ="submit">Send Mail</button>
                    </form>
                

            </div>

        </div>
       
           */}


          
 


  </div>
  </>
  )
}




export default Desktop9bottom;