import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from "react";
import './Navigation.css';
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa';


const Navigation = ({isLogin, setIsLogin, currUser, setCurrUser}) => {

    const [query, setQuery] = useState([]);

    // handle log out button
    const handleLogOut = () => {
        setIsLogin(!isLogin);
        setCurrUser({});
    }


    return (
        <nav className="nav-bar">
            <ul className="nav-ul">
                <li>
                <div className="logo-div">
                    <Link to='/'>Logo</Link>
                </div>
                </li>
                
                <ul className="nav-hpc">
                    <li className="nav-li"><Link to='/home'>Home</Link></li>
                    <li className="nav-li"><Link to='/products'>Products</Link></li>
                    <li className="nav-li"><Link to='/contact'>Contact</Link></li>
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
                    <div className='dropdown-content'  styleleft="left:0">
                        <a><Link to='/login'>{isLogin ? "My Orders" : "Log In"}</Link></a>
                        <a><Link to='/signup'>{isLogin ? "My Details" : "Sign Up"}</Link></a>
                        {isLogin && <a href="#" onClick={handleLogOut}>Log Out</a>}
                    </div>
                </div>
                <button className="drop-btn"><Link to='/contact'><FaShoppingCart/></Link></button>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navigation;