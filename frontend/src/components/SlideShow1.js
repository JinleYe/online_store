import { useState, useEffect, useRef } from "react";
import slide1 from './slideImages/slide1new.gif';
import slide2 from './slideImages/slide2new.gif';
import slide3 from './slideImages/gaming1.png';
import remote from './slideImages/Group_40.png';
import { Icon } from '@iconify/react';
import './SlideShow1.css';


const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const video1 = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7f806cb08ad5d99f/61d908612e109d6c649d3b87/Disruption_VAL_DESKTOP_1730x720.mp4";
const video2 = "https://webstatic.hoyoverse.com/upload/contentweb/2022/03/08/ee4bd2d72b7446aab4aa63019373449d_2578887134885281577.mp4"
const video3 = "https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm";

const videos = [video1, video2, video3];


const images = [slide1, slide2, slide3];
const delay = 7000;

  
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
        {/* <span className="poster-cover"> */}
        {videos.map((video, index) => (
          <div className="slide" key={index}>
              <span className="controller-img">
              {/* {video == video1 && <><img  src={remote} height="390px" width="490px"/> 
                <h1 className="slidewords-img">PS4 V2 </h1>
                <h1 className="slidewords-img">DualShock 4</h1>
                <h3 className="slidewords2-img">Wireless controller for PlayStation 4</h3>
                </>
                
              } */}
              {video == video2 && <>
                <button className="poster-btn" >
                  GEAR UP<Icon id="arrow" icon="bi:arrow-right" />
                </button>
                </>
                
              }

              </span>
 
              {/* <img className ="slideShow_img" src = {image}/> */}
              <video muted loop playsinline autoPlay className="poster-video">
                <source src= {video} type="video/mp4"/>
              </video>
              <div className="poster-cover"></div>

            {/* <button id="slideButton1" >
              <p id= "buyNow">GEAR UP<Icon id="arrow" icon="bi:arrow-right" /></p>
            </button> */}
       

          </div> 
        ))}

          {/* </span> */}
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
  