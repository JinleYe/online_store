import React from 'react'
import "./SubTitle.css";

const SubTitle = (props) => {
    const {subTitle} = props
  return (
    <div className='sub-title-container'>
       <h2 className='sub-title'> {subTitle} </h2>
    </div>
  )
}

export default SubTitle