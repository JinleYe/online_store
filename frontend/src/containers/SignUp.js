import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import './SignUp.css';

const SignUp = () => {

    
    const inputNewEmail = useRef();
    const inputNewPassword = useRef();
    const inputNewUserName = useRef();


    const [allUsers, setAllUsers] = useState([]);

    // setting hook for sign up process
    const [allowedSignup, setAllowedSignup] = useState([false, false, false]);

    // setting hook for password shown or not
    const [passwordShown, setPasswordShown] = useState(false);

    // show password or not
    const handlePasswordShown = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }

    // handle sign up
    const handleSignUp = () => {

    }

    //--------------checking sign up progress----------------------

    // check if it is the right format of email address
    const handleCorrectEmail = () => {
        // initialise a checker, index 1
        let userEmailChecker = [false, allowedSignup[1], allowedSignup[2]];

        if (!inputNewEmail.current.value.includes("@")) {
            document.querySelector('.new-user-email-input').innerHTML = "Please put in the correct email"

            // didn't pass the email checker
            setAllowedSignup(userEmailChecker);
        }
        else {
            document.querySelector('.new-user-email-input').innerHTML = "";

            // pass email checker
            userEmailChecker = [true, allowedSignup[1], allowedSignup[2]];
            setAllowedSignup(userEmailChecker);

        }
    }


    // check if the password is strong enough or not
    const handlePasswordChecker = () => {

        // initialise a checker, index 2
        let userPasswordChecker = [allowedSignup[0], false, allowedSignup[2]];

        const specialSymbol = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', 
                                '+', '=', '{', '[', '}', ']', '|', '"', '<', '>', '.', '?', '/'];

        if (inputNewPassword.current.value == '1234' || inputNewPassword.current.value == 'abc'
            || inputNewPassword.current.value.length < 8) {
            document.querySelector('.new-user-password-input').innerHTML = ``;

            // didn't pass the password checker
            setAllowedSignup(userPasswordChecker);
        }
        else if (specialSymbol.filter(s => inputNewPassword.current.value.includes(s)).length == 0) {
            document.querySelector('.new-user-password-input').innerHTML = ``;

            // didn't pass the password checker
            setAllowedSignup(userPasswordChecker);
        }
        else {
            document.querySelector('.new-user-password-input').innerHTML = ``;

            // pass password checker 
            userPasswordChecker = [allowedSignup[0], allowedSignup[1], true];
            setAllowedSignup(userPasswordChecker);

        }
    }

    return (
        <div className="sign-up-container">
            <form className="sign-up-form">
            <h1 className="sign-up-title">Sign Up</h1>
                
                <div className="other-sign-up">
                
                <ul>
                <li>
                    <a href="wwww.twitter.com" className="button-a-tag">
                    <button className="other-sign-up-button-twitter"><BsTwitter className="other-sign-up-icons-twitter"/>
                    </button>
                    </a>
                </li>
                <li>
                    <a href="wwww.google.co.uk" className="button-a-tag">
                    <button className="other-sign-up-button-google"><BsGoogle className="other-sign-up-icons-google"/>
                    </button></a>
                </li>
                <li>
                    <a href="wwww.linkedin.com" className="button-a-tag">
                    <button className="other-sign-up-button-linkedin"><FaLinkedinIn className="other-sign-up-icons-linkedin"/>
                    </button></a>
                </li>
                <li>
                    <a href="wwww.github.com" className="button-a-tag">
                    <button className="other-sign-up-button-github"><BsGithub className="other-sign-up-icons-github"/>
                    </button></a>
                </li>
                </ul>
                </div>
                <p className="or-line"><span>Or create account bellow.</span></p>

                <br/>
                
                <input type="text" placeholder="Email Address" ref={inputNewEmail} 
                                   onChange={handleCorrectEmail} className="sign-up-input-box"/>
                <p className='new-user-email-input'></p>
                <br/>
                
                <input  type={passwordShown? "text" : "password"} placeholder="Password" ref={inputNewPassword} 
                        onChange={handlePasswordChecker} className="sign-up-input-box"/><br/>
                <button onClick={handlePasswordShown} className="password-shown-button">{passwordShown? <AiOutlineEye className="password-eye"/> : <AiOutlineEyeInvisible className="password-eye"/> }
                </button>
                {/* <div className='password-div'></div> */}
                <br/>
                <input  type={passwordShown? "text" : "password"} placeholder="Confirm Password" ref={inputNewPassword} 
                        onChange={handlePasswordChecker} className="sign-up-input-box"/><br/>
                <button onClick={handlePasswordShown} className="password-shown-button">{passwordShown? <AiOutlineEye className="password-eye"/> : <AiOutlineEyeInvisible className="password-eye"/> }
                </button>
                <br/>

                <a href="#" className="link-a-tag">Log in as Admin?</a>
                <br/>

                <a href="#" className="link-a-tag">Forget your password?</a>
                <br/>

                <div>
                <br/>

                <button onClick={handleSignUp} className='sign-up-btn'>Log In</button>
                </div>
                <p className="go-to-signup">Don't have an Account?&nbsp;
                    <a href="/account" className="link-a-tag">Create account</a></p>

            </form>

        </div>
    )
}

export default SignUp;