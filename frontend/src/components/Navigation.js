import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import { useState } from "react";


const Navigation = ({isLogin}) => {

    const [query, setQuery] = useState([]);

    return (
        <nav>
            <ul>
                <div>
                    <Link to='/'>LOGO</Link>
                </div>

                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/contact'>Contact</Link></li>

                {/* <li>
                    <Link to='/search'>Search <input type="text"/></Link>
                </li> */}
                <SearchBar getQuery={(q) => setQuery(q)} />



                <div className='dropdown'>
                    <button>Account-icon</button>
                    <div className='dropdown-content'>
                        <li><Link to='/login'>{isLogin ? "My Orders" : "Log In"}</Link></li>
                        <li><Link to='/signup'>{isLogin ? "My Details" : "Sign Up"}</Link></li>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default Navigation;