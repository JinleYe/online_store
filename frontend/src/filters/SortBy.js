import React from 'react'
import { useState } from "react";
import "../styles/SortBy.css";

const SortBy = ({sortItems}) => {

    const [selectedValue, setSelectedValue] = useState("");

    const sortByDropdown = (e) => {
        setSelectedValue(e.target.value)
        sortItems(e.target.value)
    }
    

    return (
        <div id='filter-sort'> {" "}
        <select className="sortby" onChange ={(e) => sortByDropdown(e)}>
            <option value="default">Sort By:</option>
            <option  value="lowest">Lowest Price</option>
            <option  value="highest">Highest Price</option>
            <option value="a1">A-Z</option>
            <option value="z1">Z-A</option>
        </select>
        </div>
    );
  }

  export default SortBy;
