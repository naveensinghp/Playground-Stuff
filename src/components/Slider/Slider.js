import React from 'react';
import {styles} from './slider.module.css'
import Spacer from '../Spacer/Spacer';
import styled from "styled-components";


function Slider({ onData }) {
  const [volume,setVolume] = React.useState(50);
  return (
    <>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
       >
        <label htmlFor="volume-slider">Volume</label>
        <Spacer size={16} />
        <Inputwrapper 
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={ event => {
            onData(event.target.value);
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



const Inputwrapper = styled.input`
  --handle-size: 20px;
  --handle-radius: 1000px;
  --track-size: 3px;
  --track-color: hsl(0deg 0% 70%);
  --handle-color: hsl(0deg 0% 10%);
  --track-active-color: hsl(0deg 0% 60%);
  --handle-active-color: hsl(260deg 100% 50%);

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  outline-offset: 6px;
  cursor: pointer;
  &::webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 300px;
  }
  &::-webkit-slider-thumb{
    margin: -7px;
  }
  
  &::-webkit-slider-runnable-track{
    width: calc(100% - var(--handle-size));
    height: var(--track-size);
    background: var(--track-color);
    border-radius: var(--track-size) / 2;
    margin: calc(var(--handle-size) / 2) 0;
  }
  &:active::-webkit-slider-runnable-track{
    background: var(--track-color);
  }
  &:focus::-webkit-slider-runnable-track{
    background: var(--track-active-color);
  }
  &:focus::-webkit-slider-thumb{
    background: var(--handle-active-color);
  }
`;