import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from "react";
import './Navigation.css';



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
                <div className="logo-div">
                    <Link to='/'>Logo</Link>
                </div>

                <li className="nav-li"><Link to='/home'>Home</Link></li>
                <li className="nav-li"><Link to='/products'>Products</Link></li>
                <li className="nav-li"><Link to='/contact'>Contact</Link></li>

                {/* <li>
                    <Link to='/search'>Search <input type="text"/></Link>
                </li> */}
                <SearchBar getQuery={(q) => setQuery(q)} />

                <div className='dropdown'>
                    <button>Account-icon</button>
                    <div className='dropdown-content'>
                        <li><Link to='/login'>{isLogin ? "My Orders" : "Log In"}</Link></li>
                        <li><Link to='/signup'>{isLogin ? "My Details" : "Sign Up"}</Link></li>
                        {isLogin && <li><a href="#" onClick={handleLogOut}>Log Out</a></li>}
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation;