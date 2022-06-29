import React, {useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/SearchBar.css";


const SearchBar = ({getQuery}) => {

    const [text, setText] = useState("")

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    }

  return (
    <section className='search'>
        <form>
          <div className='search-box'>
            <AiOutlineSearch />
            <input 
            type="text" 
            className="form-control" 
            placeholder="Search..."
            value={text}
            onChange={(event) => onChange(event.target.value)}
            autoFocus/>
            </div>
        </form>
    </section>
  )
}

export default SearchBar;