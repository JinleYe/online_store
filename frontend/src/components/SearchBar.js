import React, {useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/SearchBar.css";


const SearchBar = ({getQuery, searchProduct}) => {

    const [text, setText] = useState("")

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }

  return (
    <section className='search'>
        <form>
          <div className='search-box'>
            <AiOutlineSearch className='search-icon'/>
            <input 
            type="text" 
            className="form-control" 
            placeholder="Search..."
            value={text}
            onClick={searchProduct}
            onChange={(event) => onChange(event.target.value)}
            autoFocus/>
                        {/* <AiOutlineSearch className='search-icon'/> */}

            </div>
        </form>
    </section>
  )
}

export default SearchBar;