import TextField from "@mui/material/TextField";
import * as React from "react";
import "./Desktop9bottom.css";
import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import contactimage from './contactimages/contactimage.png'


import './Desktop9bottom.css';


function Desktop9bottom() {


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
 
        <TextField 
          label="Your Name"
          required
          className="contact-input"
          style={{
            minWidth: "260px",
            minHeight: "30px",
            left:"3.6em"

          }}/>
          
          
        <TextField  type="email" 
          label="Your E-mail"
          required
          className="contact-input"
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
          className="contact-input"
          style={{
            minWidth: "544px",
            minHeight: "30px",
            left:"4.4em"
          }}
        />{" "}
        <br /> <br /><br />
        <TextField id="yourmessage"
          label="Type Your Message"
          required
          className="contact-input"
          type=""
          style={{
            minWidth: "550px",
            minHeight: "30px",
            left:"4.4em"

          }}
        />{" "}
        <br />
        <br />
       
     
        {/* <a href="https://google.com" target="_blank" >Learn more.</a> */}
    
        <br /><br /> <br />

        

      <button id="sendmail">Send Mail
      </button>
      </form>
    </div>

    {/* <img id= "contactimage"src={contactimage}  alt="Contact us image"/> */}



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