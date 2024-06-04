import React from 'react';
import {styles} from './slider.module.css'
import Spacer from '../Spacer/Spacer';

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
        <Spacer size={16} />
        <input 
          style={{
            width: '100%',
            appearance: 'none',
            outlineOffset: '12px',
            outlineColor: 'red',
            cursor: 'pointer',
            appearance: 'none'
          
          }}
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
        <strong>Current Value {' '}</strong>
          {volume}
      </p>
    </>
  );
}

export default Slider;
