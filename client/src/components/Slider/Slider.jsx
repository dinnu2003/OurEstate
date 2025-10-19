import React, { useState, useCallback, useEffect } from 'react'
import "./Slider.scss"
import { KeyboardArrowLeft, KeyboardArrowRight, Close } from '@mui/icons-material';
function Slider({ images }) {

  const [index, setIndex] = useState(null);
  const handleKeyDown = useCallback((e) => {
    if (index === null) return;  // only active when slider open
    if (e.key === 'ArrowLeft') {
      changeSlide('left');
    } else if (e.key === 'ArrowRight') {
      changeSlide('right');
    } else if (e.key === 'Escape') {
      setIndex(null);
    }
  }, [index]);
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  
  const changeSlide = (direction) => {
    console.log("Direction:", direction, "Current index:", index);
    if(direction==="left"){
      if(index===0){
        setIndex(images.length-1);
      }
      else{
        setIndex((prev)=>(prev-1))
      }

    }
    else{
      if(index===images.length-1){
        setIndex(0)

      }
      else{
        setIndex((prev)=>(prev+1))
      }
    }

  }

  return (
    <div className='slider'>
      {index !== null && (<div className="full-slider">
        <div className="arrow">
          <button><KeyboardArrowLeft onClick={() => changeSlide("left")} sx={{ color: 'white', fontSize: 50 }} /></button>
        </div>
        <div onKeyDown={handleKeyDown} className="image">
          <img src={images[index]} alt='' />

        </div>
        <div className="arrow">
          <button ><KeyboardArrowRight  onClick={() => changeSlide("right")} sx={{ color: 'white', fontSize: 50 }} /></button>

        </div>
        <button onClick={() => setIndex(null)} className='close'>
          <Close sx={{ color: 'white', fontSize: 40 }} />
        </button>
      </div>)}
      <div className="big-images">
        <img src={images[0]} onClick={() => setIndex(0)} alt='' />
      </div>
      <div className="small-images">
        {images.slice(1).map((image, ind) => (
          <img src={image} onClick={() => setIndex(ind + 1)} alt='' key={ind} />
        ))}
      </div>
    </div>
  )
}

export default Slider
