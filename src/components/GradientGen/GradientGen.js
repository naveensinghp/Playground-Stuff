import React from 'react';
import styles from '../../../styles/Home.module.css';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';
import { X } from 'react-feather';
import { animated } from 'react-spring';
import useBoop from '../../../hooks/use-boop';
import Slider from '../Slider/Slider';


function GradientGen() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#000066',
    '#FF0040',
    '#000066',
    '#FF0040',
  ]);

  const [style, trigger] = useBoop({x: 7 });
  const [numOfVisibleColors,setNumOfVisibleColors] = React.useState(4);
  const visibleColors = colors.slice(0,numOfVisibleColors)
  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`
  const Tag = false ? 'a' : 'button';
  
  console.log('colors',colors);
  return (
    <>
      <Slider />
      <div className={styles.mainwrapper}>
        <div className={styles.rowleft}>
          <h3>Colors :  </h3> 
          <form>
            {colors.map((color,index) =>{
              const colorId = `color -${index}`;
              return (
                <input 
                      key={colorId}
                      id={colorId}
                      type="color"
                      value={color}
                      className={styles.addcolor}
                      onChange={event => {
                        const newcolor = [...colors]
                        newcolor[index] = event.target.value;
                        setColors(newcolor);
                      }}
                />
              );
            })}
          </form> 
          {/* <h3>Colors Mode : </h3>
          <form>
            {colors.map((color,index) =>{
              const colorId = `color -${index}`;
              return (
                <input 
                      key={colorId}
                      id={colorId}
                      type='color'
                      value={color}
                      style={{width: '100px',height: '100px', cursor: 'pointer', margin: '10px'}} 
                      onChange={setColors}
                />
              );
            })}
          </form> */}
        </div>
        <div className={styles.rowright}>
          <h3>Your Gradient : </h3>
            <div 
              className={styles.csssnipet} 
              style={{
                backgroundImage,
              }}>
          </div>
        </div>
        <div 
            className={styles.testhover} 
            style={{ display: 'flex',flexDirection: 'column',alignItems: 'end' }}>
             <animated.span style={style}>
              <span className="viewarrow"> &nbsp; 
                <input 
                  type='color' 
                  className={styles.addcolor} 
                  onChange={setColors}  
                  onMouseEnter={trigger}  />
                   <X className={styles.closeicon} size={36} /> 
              </span>
            </animated.span>
        </div>  
      </div>
    </>
  );
}

export default GradientGen;
