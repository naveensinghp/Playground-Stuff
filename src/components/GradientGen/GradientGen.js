import React from 'react';
import styles from '../../../styles/Home.module.css';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';

function GradientGen() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#000066',
    '#FF0040',
    '#FF0040',
    '#FF0040',
  ]);
  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`

  return (
    <>
      <div className={styles.mainwrapper}>
        <div className={styles.rowleft}>
            <form style={{ display: 'flex',flexDirection: 'row' }}>
              {colors.map((color,index) =>{
                const colorId = `color -${index}`;
                return (
                  <div key={colorId} style={{ display: 'flex', flexDirection: 'column'}}>
                      {/* <label htmlFor={colorId}>Color {index +1}</label> */}
                      <input 
                        id={colorId}
                        type='color'
                        value={color}
                        style={{ width: '100px',height: '100px', cursor: 'pointer', margin: '10px'}} 
                        onChange={setColors}
                      />
                  </div>
                );
              })}
            </form>
        </div>
        <div className={styles.rowright}>
                <Spacer size={10} />
                <h3>Your Gradient : </h3>
              <div 
                className={styles.csssnipet} 
                style={{
                  backgroundImage,
              }}>
           </div>
        </div>
        <Spacer size={10} />
        <div className={styles.rowright}>
                <Spacer size={10} />
                <h3>Your Gradient : </h3>
              <div 
                className={styles.csssnipet} 
                style={{
                  backgroundImage,
              }}>
           </div>
        </div>
      </div>
    </>
  );
}

export default GradientGen;
