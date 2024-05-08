import React from 'react';
import {styles} from './slider.module.css'

function Slider() {
  const [volume,setVolume] = React.useState(50);
  return (
    <>

      <form
      styles
        onSubmit={(event) => {
          event.preventDefault();
        }}
       >
        <label htmlFor="volume-slider">Volume</label>
        <input 
          type="range"
          id="volume-slider"
          min={0}
          max={100}
          value={volume}
          onChange={ event => {
            setVolume(event.target.value)
          }}
        />
      </form>
      <p>
        <strong>Current Value</strong>
          {volume}
      </p>
    </>
  );
}

export default Slider;
