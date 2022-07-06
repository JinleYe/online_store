import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState, useEffect } from "react";
import './Navigation.css';
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa';
import logo from './logo_images/logo_only.gif';
import logo2 from './logo_images/PP.png';
import usePersistedState from './usePersistedState';

const Navigation = ({isLogin, setIsLogin, currUser, setCurrUser, shoppingCart, setShoppingCart}) => {

    const [query, setQuery] = useState([]);

    const [clickTimes, setClickTime] = useState(0);

    // handle log out button
    const handleLogOut = () => {
        setIsLogin(!isLogin);
        setCurrUser({});
        setShoppingCart({});  
    }

    // handle update
    useEffect(() => {
        isLogin && fetch(`http://localhost:8080/customers/${currUser.id}`)
                   .then(response => response.json())
                   .then(data => {setCurrUser(data)})
        isLogin && setShoppingCart(currUser.cart)
        console.log("useEffect at Navigation");
      },[clickTimes])  

    const handleUpdate = (event) => {
        event.preventDefault();
        setClickTime(clickTimes+1);
    }


    return (
        <>
            <nav className="nav-bar">
                    <div className="logo-div" onClick={handleUpdate}>
                    <Link to='/'><img src={logo} height="70px" className="logo-gif"/></Link>   
                </div>
               
                <Link to='/'><img src={logo2} height="170px" className="logo-gif2"/></Link>   
                    
                <ul className="nav-ul">
                <ul className="nav-hpc">
                    <li className="nav-li" onClick={handleUpdate}><Link to='/home'>Home</Link></li>
                    <li className="nav-li" onClick={handleUpdate}><Link to='/products'>Products</Link></li>
                    <li className="nav-li" onClick={handleUpdate}><Link to='/contact'>Contact</Link></li>
                </ul>

                <li>
                <div className='dropdown'>
                    <button className="drop-btn"><FaUserAlt/></button>
                    <div className='dropdown-content'  styleleft="left:0" onClick={handleUpdate}>
                        <Link to='/login' >{isLogin ? "My Orders" : "Log In"}</Link>
                        <Link to='/signup'>{isLogin ? "My Details" : "Sign Up"}</Link>
                        {isLogin && <Link onClick={handleLogOut} to='/login'>Log Out</Link>}
                    </div>
                </div>
                <button className="drop-btn" onClick={handleUpdate}><Link to='/cart'><FaShoppingCart/></Link></button>
                </li>
                
            </ul>
        </nav>
        </>
    )
}

export default Navigation;