import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState, useEffect } from "react";
import './Navigation.css';
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa';
import logo from './logo_images/logo_only.gif';
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
        <nav className="nav-bar">
            <ul className="nav-ul">
                <li>
                <div className="logo-div" onClick={handleUpdate}>
                    <Link to='/'><img src={logo} height="70px" className="logo-gif"/></Link>
                </div>
                </li>
                
                <ul className="nav-hpc">
                    <li className="nav-li" onClick={handleUpdate}><Link to='/home'>Home</Link></li>
                    <li className="nav-li" onClick={handleUpdate}><Link to='/products'>Products</Link></li>
                    <li className="nav-li" onClick={handleUpdate}><Link to='/contact'>Contact</Link></li>
                </ul>

                {/* <li>
                    <Link to='/search'>Search <input type="text"/></Link>
                </li> */}
                <li>
                <SearchBar getQuery={(q) => setQuery(q)} />
                </li>

                <li>
                <div className='dropdown'>
                    <button className="drop-btn"><FaUserAlt/></button>
                    <div className='dropdown-content'  styleleft="left:0" onClick={handleUpdate}>
                        <Link to='/login' >{isLogin ? "My Orders" : "Log In"}</Link>
                        <Link to='/signup'>{isLogin ? "My Details" : "Sign Up"}</Link>
                        {isLogin && <a href="#" onClick={handleLogOut}><Link to='/login'>Log Out</Link></a>}
                    </div>
                </div>
                <button className="drop-btn" onClick={handleUpdate}><Link to='/cart'><FaShoppingCart/></Link></button>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navigation;