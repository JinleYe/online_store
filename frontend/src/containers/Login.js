import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import './Login.css';

const Login = ({isLogin, setIsLogin, currUser, setCurrUser}) => {

    const navigate = useNavigate();

    const inputEmail = useRef();
    const inputPassword = useRef();
    const [allUsers, setAllUsers] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);

    // set isAdmin or not, better in the App.js page
    let isAdmin = false;

    useEffect(()=>{
        var userOrCsutomer = isAdmin ? "admins" : "customers";

        fetch(`http://localhost:8080/${userOrCsutomer}`)
        .then(response => response.json())
        .then(data => setAllUsers(data))

    },[])

    const handleLogin = (event) => {
        
        const curr = allUsers.filter(user => user.user.email == inputEmail.current.value &&
                                                    user.user.password == inputPassword.current.value);

        if (curr.length == 0) {
            alert("Invalid email adress or password! Please try again!")
            return
        };

        // isAdmin ? setCurrAdmin(curr[0]) : setCurrUser(curr[0]);
        setCurrUser(curr[0]);
        setIsLogin(!isLogin);
        navigate('/products');

    }


    // show password or not
    const handlePasswordShown = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }


    return (
        <div className="sign-up-container">
            <form className="sign-up-form">
            <h1 className="sign-up-title">Login</h1>
                
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
                <p className="or-line"><span>Or login with account detail bellow.</span></p>

                <br/>
                
                <input type="text" placeholder="Email Address" ref={inputEmail} className="sign-up-input-box"/>
                <p className='new-user-email-input'></p>

                
                <input  type={passwordShown? "text" : "password"} placeholder="Password" ref={inputPassword} className="sign-up-input-box"/><br/>
                <button onClick={handlePasswordShown} className="password-shown-button">{passwordShown? <AiOutlineEye className="password-eye"/> : <AiOutlineEyeInvisible className="password-eye"/> }</button>
                <p className='new-user-password-input'></p>
                <br/>

                <a href="#" className="link-a-tag">Log in as Admin?</a>
                <br/>

                <a href="#" className="link-a-tag">Forget your password?</a>
                <br/>

                <div>
                <br/>

                <button onClick={handleLogin} className='sign-up-btn'>Log In</button>
                </div>
                <p className="go-to-signup">Don't have an Account?&nbsp;
                    <a href="/account" className="link-a-tag">Create account</a></p>

            </form>

        </div>
    )
}

export default Login;