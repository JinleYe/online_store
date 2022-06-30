import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import './SignUp.css';
import usePersistedState from '../components/usePersistedState';

const SignUp = ({isLogin, setIsLogin, currUser, setCurrUser}) => {

    
    const inputNewEmail = useRef();
    const inputNewPassword = useRef();
    const inputConfirmPassword = useRef();
    const inputNewUserName = useRef();
    const inputFullName = useRef();
    const inputAddress = useRef();

    

    const [allUsers, setAllUsers] = useState([]);

    let isAdmin = false;
    useEffect(()=>{
        var userOrCsutomer = isAdmin ? "admins" : "customers";

        fetch(`http://localhost:8080/${userOrCsutomer}`)
        .then(response => response.json())
        .then(data => setAllUsers(data))

    },[])

    // setting hook for sign up process
    const [allowedSignup, setAllowedSignup] = useState([false, false, false, false, false, false]);
    console.log(allowedSignup);

    // setting hook for password shown or not
    const [passwordShown, setPasswordShown] = useState(false);

    // setting hook for password shown in password confirmation
    const [conPasswordShown, setConPasswordShown] = useState(false);


    // show password or not
    const handlePasswordShown = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }

    // handle confirm password show or not
    const handleConPasswordShown = (event) => {
        event.preventDefault();
        setConPasswordShown(!conPasswordShown);
    }

    // handle sign up
    // postmapping, create a new customer

    

    

    const handleSignUp = (event) => {
        event.preventDefault();

        if (allowedSignup.includes(false)) {
            alert("Please filled out the mandatory fields")
            return;
        }

        
        const newC = {
            username: inputNewUserName.current.value,
            password: inputNewPassword.current.value,
            email: inputNewEmail.current.value,
            name: inputFullName.current.value,
            address:inputAddress.current.value
        }

        fetch("http://localhost:8080/customers",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newC)
            })
        .then(response => response.json())
        .then(data => setCurrUser(data))

        setIsLogin(!isLogin);

    }

    //--------------checking sign up progress----------------------

    // check if it is the right format of email address
    const handleCorrectEmail = () => {
        // initialise a checker, index 1
        let userEmailChecker = allowedSignup.map((a, index) => index == 0 ? a = false : a = a);

        if (!inputNewEmail.current.value.includes("@")) {
            document.querySelector('.new-user-email-input').innerHTML = "Please put in the correct email"

            // didn't pass the email checker
            setAllowedSignup(userEmailChecker);
        }
        else {
            
            // input email already exists
            let result = allUsers.filter(user => user.email == inputNewEmail.current.value);
            
            if(result.length > 0){

                document.querySelector('.new-user-email-input').innerHTML = "<p>Email address already exists.</p><a href='/login'>Log in?</a>"
            }
            else{

                document.querySelector('.new-user-email-input').innerHTML = "";

                // pass email checker
                userEmailChecker = allowedSignup.map((a, index) => index == 0 ? a = true : a = a);
                setAllowedSignup(userEmailChecker);
            }

        }
    }

    


    // check if the password is strong enough or not
    const handlePasswordChecker = () => {

        // initialise a checker, index 2
        let userPasswordChecker = allowedSignup.map((a, index) => index == 1 ? a = false : a = a);
        
        const specialSymbol = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', 
                                '+', '=', '{', '[', '}', ']', '|', '"', '<', '>', '.', '?', '/'];
        // const specialSymbol = ['!', '?', '@', '.', '_', '/', '#', '$', '(', ')', '^', '%',
        //                     '*', ':', ';', '+'];

        let passwordStrength = "<span id='password-strength-1'></span><span id='password-strength-2'></span><span id='password-strength-3'></span><span id='password-strength-4'></span>" + "<p class='password-strength-text'></p>";

        if (inputNewPassword.current.value == '1234' || inputNewPassword.current.value == 'abc'
            || inputNewPassword.current.value.length < 8) {
            
            document.querySelector('.password-div').innerHTML = passwordStrength;
            document.getElementById("password-strength-1").style.background="red";
            document.querySelector(".password-strength-text").innerText = "Weak ☹ Add another word or two. Uncommon words are better.";

            // didn't pass the password checker
            setAllowedSignup(userPasswordChecker);
        }
        else if(specialSymbol.filter(s => inputNewPassword.current.value.includes(s)).length == 0){
            
            document.getElementById("password-strength-1").style.background="yellow";
            document.getElementById("password-strength-2").style.background="yellow";
            document.getElementById("password-strength-3").style.background="yellow";
            document.querySelector(".password-strength-text").innerText = "Good ☺ But I know you can do better. Add some specials characters."

            // didn't pass the password checker
            setAllowedSignup(userPasswordChecker);
            
        }
        else {
            console.log("test");
            document.getElementById("password-strength-1").style.background="green";
            document.getElementById("password-strength-2").style.background="green";
            document.getElementById("password-strength-3").style.background="green";
            document.getElementById("password-strength-4").style.background="green";
            
            document.querySelector(".password-strength-text").innerText = "Strong ☻ Guess who is ready to gear up. Ops it is YOU."
            

            // pass password checker 
            userPasswordChecker = allowedSignup.map((a, index) => index == 1 ? a = true : a = a);
            setAllowedSignup(userPasswordChecker);

        }
    }

    // check if passwords are matching
    const handlePasswordConfirm = () =>{
        let userChecker = allowedSignup.map((a, index) => index == 2 ? a = false : a = a);

        if(inputNewPassword.current.value != inputConfirmPassword.current.value){
            document.querySelector(".password-confirm-div").innerHTML = '☹ Passwords are not matching';
            
            // didn't pass the email checker
            setAllowedSignup(userChecker);
        }
        else{
            document.querySelector(".password-confirm-div").innerHTML = '';
            userChecker = allowedSignup.map((a, index) => index == 2 ? a = true : a = a);
            setAllowedSignup(userChecker);
        }
    }

    const handleOtherInfo = () => {
        let range = [3, 4, 5];
        let userChecker = allowedSignup.map((a, index) => range.includes(index) ? a = false : a = a);
        if(inputNewUserName.current.value.length==0 || inputFullName.current.value.length==0 || inputAddress.current.value.length==0){
            setAllowedSignup(userChecker);
        }
        else{
            userChecker = allowedSignup.map((a, index) => range.includes(index) ? a = true : a = a);
            setAllowedSignup(userChecker);
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
                
                <input type="text" placeholder="Email Address*" ref={inputNewEmail} 
                                   onChange={handleCorrectEmail} className="sign-up-input-box"/>
                <p className='new-user-email-input'></p>
                <br/>
                
                <input  type={passwordShown? "text" : "password"} placeholder="Password*" ref={inputNewPassword} 
                        onChange={handlePasswordChecker} className="sign-up-input-box"/><br/>
                <button onClick={handlePasswordShown} className="sign-password-btn">{passwordShown? <AiOutlineEye className="password-eye"/> : <AiOutlineEyeInvisible className="password-eye"/> }
                </button>
                <div className="password-div">
                </div>

               
                <input  type={conPasswordShown? "text" : "password"} placeholder="Confirm Password*" ref={inputConfirmPassword} 
                        onChange={handlePasswordConfirm} className="sign-up-input-box"/><br/>
                <button onClick={handleConPasswordShown} className="sign-password-btn">{conPasswordShown? <AiOutlineEye className="password-eye"/> : <AiOutlineEyeInvisible className="password-eye"/> }
                </button>
                <div className="password-confirm-div">
                </div> 

                <input type="text" ref={inputNewUserName} onChange={handleOtherInfo} placeholder="User Name*" className="sign-up-input" />
                
                <input type="text" ref={inputFullName} onChange={handleOtherInfo} placeholder="Full Name*" className="sign-up-input"/>

                <input type="address" ref={inputAddress} onChange={handleOtherInfo} placeholder="Delivery Address*" className="sign-up-input"/>
                
                <p className="fields-info">Fields marked with (*) are mandatory</p>

                <a href="/" className="link-a-tag">Sign up as Admin?</a>
                <br/>

            
                <div>
                <br/>

                <button onClick={handleSignUp} className='sign-up-btn'>Sign Up</button>
                </div>
                <p className="go-to-signup">Have an Account?&nbsp;
                    <a href="/login" className="link-a-tag">Go to Log in</a></p>

            </form>

        </div>
    )
}

export default SignUp;