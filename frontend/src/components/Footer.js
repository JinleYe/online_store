import React from "react";
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {

    return (
        <div className="footer-container">
            
            <div className="footer"> 

                {/* <div className="footer-email-form">
                     <h2>Sign up to our newsletter!</h2>
                    
                    <div className="footer-input-btn">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            id="footer-email"/>
                        <div className="btn">
                        <input
                            type="submit"
                            value="Sign Up"
                            id="footer-email-btn"/></div>
                    </div>

                </div>       */}
             

                <div className="footer-heading footer 1">
                    <h2>Shop</h2>
                    <a href="#">Laptops</a>
                    <a href="#">Wireless Headphones</a>
                    <a href="#">Motherboards</a>
                    <a href="#">Controllers</a>
                    <a href="#">Playstation</a>
                    <a href="#">Gaming Accessories</a>
                    <a href="#">Oculus Quest</a>
                    <a href="#">Gift Card</a>
                </div>
                
                <div className="footer-heading footer 2">
                    <h2>Help</h2>
                    <a href="#">Track Your Order</a>
                    <a href="#">Warranty and Support</a>
                    <a href="#">Return Policy</a>
                    <a href="#">Controllers</a>
                    <a href="#">Service Centre</a>
                    <a href="#">Wholesale</a>
                    <a href="#">FAQs</a>
                    <a href="#">Why Buy Direct?</a>
                </div>

                <div className="footer-heading footer 3">
                    <h2>Pixelated Paradise</h2>
                    <a href="#">About Us</a>
                    <a href="#">News</a>
                    <a href="#">Read Our Blog</a>
                    <a href="#">High5heads</a>
                    <a href="#">Our Partners</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Partner Offers</a>

                    <div className="footer-email-form">
                        <h2>Sign up to our newsletter!</h2>
                        
                        <div className="footer-input-btn">
                            <input
                                type="email"
                                placeholder="Email address"
                                id="footer-email"/>

                                <div className="btn">
                                    <input
                                        type="submit"
                                        value="Sign Up"
                                        id="footer-email-btn"/>
                                </div>
                        </div>

                    </div>   
                    
                </div>     
            </div>
            

                <div className="footer-icons">

                    <div className="footer-payment">
                        <h2>We accept..</h2>
                        <img className="payment-methods"
                            src="images/payment-methods2.png"
                            alt="Payment Icons"/>
                    </div>

                    <div className="footer-apps">
                        <h2>Get the app</h2>
                        
                        <div className="footer-store-logo">

                            <img className="footer-apple-store" 
                            src="images/apple_store_logo.png"
                            alt="apple app store"/>

                            <img className="footer-google-store"
                            src="images/google_play_store_logo.png"
                            alt="google play store"/>
                        </div>

                    </div>

                <div className="footer-socials">
                    <h2>Follow Us!</h2>
                    <ul>
                    <a href="https://www.currys.co.uk/"> 
                        <li>    
                            <FaFacebook className="social-icon" size="3em" color="white" />
                            <FaInstagram className="social-icon" size="3em" color="white"/>
                            <FaTwitter className="social-icon" size="3em" color="white"/>
                        </li>
                    </a>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="text-xs-center">
                &copy;{new Date().getFullYear()} All Rights Reserved
                </p>
            </div> 

        </div>

    );
}

export default Footer;