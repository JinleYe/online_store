import React from 'react'
import '../containers/Home.css';
import delivery from './offerImages/delivery.png'
import cashback from './offerImages/cashback.png'
import premium from './offerImages/premium.png'
import support from './offerImages/support.png'
import './Offer.css';


function Offer(){
  return (
    <div className="offer-container">
      <div className="l-grid">
        <div className="header">
        <h2 id= "offertext"> What's on Offer!</h2>
        </div>

        <div className="left-column">
        <img id= "column1img"src={delivery}/>
          <h3 className='columnheaderfont'> Free Shipping</h3>
          <br/>
          <p className='columnfont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
        
        </div>
        <div className="center-column">
        <img id= "column2img"src={cashback}/>

          <h3 className='columnheaderfont'> Exclusive Deals</h3>
          <br/>
          <p  className='columnfont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida. </p>  </div>
        
          <div className="penultimate-column">
          <img id= "column3img"src={premium}/>
          <h3 className='columnheaderfont'> Quality Product</h3>   
          <br/>
          <p  className='columnfont'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.  </p> </div>
        
        <div className="right-column">
        <img id= "column4img"src={support}/>
          <h3 className='columnheaderfont'> 24/7 Support</h3>
          <br/>
          <p  className='columnfont'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.  </p> </div>
        
      </div>
    </div>


  )
}

export default Offer