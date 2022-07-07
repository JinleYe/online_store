import { useState, useEffect, useRef } from "react";
import slide1 from './slideImages/slide1new.gif';
import slide2 from './slideImages/slide2new.gif';
import slide3 from './slideImages/gaming1.png';
import { Icon } from '@iconify/react';
import './SlideShow1.css';
import { useNavigate } from "react-router-dom";


const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const video1 = "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7f806cb08ad5d99f/61d908612e109d6c649d3b87/Disruption_VAL_DESKTOP_1730x720.mp4";
const video2 = "https://webstatic.hoyoverse.com/upload/contentweb/2022/03/08/ee4bd2d72b7446aab4aa63019373449d_2578887134885281577.mp4"
const video3 = "https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm";

const videos = [video1, video2, video3];
// const navigate = useNavigate();

// function handleNavigate(){
//   navigate('./products');
// }

const images = [slide1, slide2, slide3];
const delay = 7000;

  
  function SlideShow1() {
    const navigate = useNavigate();

  function handleNavigate(){
    navigate('../products');
  }

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
          <>
          <div className="slide" key={index}>
              <span className="controller-img">
              </span>

              <video muted loop playsinline autoPlay className="poster-video">
                <source src= {video} type="video/mp4"/>
              </video>
              <div className="poster-cover"></div>
              
              
              <video muted loop playsinline autoPlay className="second-video">
                <source src= {video} type="video/mp4"/>
              </video>
              <span className="border-line">
              </span>

              {video == video2 && <>
                {/* <a href="./products"> */}
                <button className="poster-btn" onClick={handleNavigate}>
                  GEAR UP<Icon id="arrow" icon="bi:arrow-right" />    
                 
                </button>
                {/* </a>   */}
                </>
              }

          </div> 

        </>
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
  