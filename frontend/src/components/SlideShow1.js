import { useState, useEffect, useRef } from "react";
import slide1 from './slideImages/slide1.png'
import slide2 from './slideImages/mario.png'
import slide3 from './slideImages/gaming2.png'
import { Icon } from '@iconify/react';


const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const images = [slide1, slide2, slide3];
const delay = 2500;

  
  function SlideShow1() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="slideshow">
         <div
         
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }} >
       
        {images.map((image, index) => (
          <div className="slide" key={index}>
              <img className ="slideShow_img" src = {image}/>

        <div className = "posterText">
           <h1 id="headerPS4"> PS4 V2 </h1>
           <h1 id="header2PS4"> DualShock 4 </h1>
           <div id="subheaderTexts">
           <h4 id= "subheaderPS4"> Wireless Controller For PlayStation 4</h4>
           <p id="paragraphPS4"> (CompatibilityCentric)</p>

           </div>
           <h2 id="price"> £2999 </h2>
        </div>
        

        <button id="slideButton" >
        <p id= "buyNow">BUY NOW <Icon id="arrow" icon="bi:arrow-right" /></p>
       </button>

       <button id="slideButton3" >
        <p id= "buyNow">BROWSE LATEST LAPTOPS!  </p>
       </button>
          </div> 
        ))}
          </div>
  
        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}

          
        </div>
      </div>
    );
  }

  export default SlideShow1