import { useState, useEffect, useRef } from "react";
import slide1 from './slideImages/slideimage1.png';
import slide2 from './slideImages/Lenovo.webp';
import slide3 from './slideImages/gaming1.png';
import remote from './slideImages/Group_40.png';
import { Icon } from '@iconify/react';
import './SlideShow1.css';


const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const images = [slide1, slide2, slide3];
const delay = 4500;

  
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
      <div className="slideshow" >
         <div
         
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}vw, 0, 0)` }} >
       
        {images.map((image, index) => (
          <div className="slide" key={index}>
              <span className="controller-img">
              {image == slide1 && <><img  src={remote} height="390px" width="490px"/> 
                {/* <h1 className="slidewords-img">PS4 V2 </h1>
                <h1 className="slidewords-img">DualShock 4</h1>
                <h3 className="slidewords2-img">Wireless controller for PlayStation 4</h3> */}
                </>
                
              }
              </span>
 
              <img className ="slideShow_img" src = {image}/>

        <button id="slideButton1" >
        <p id= "buyNow">SHOP GAMING ACCESSORIES <Icon id="arrow" icon="bi:arrow-right" /></p>
       </button>
       

          </div> 
        ))}


          </div>
  
        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {setIndex(idx);
              }}
            ></div>
          ))}
        </div>

      </div>
    );
  }

  export default SlideShow1;
  