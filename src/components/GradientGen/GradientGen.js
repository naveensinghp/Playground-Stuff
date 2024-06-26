import React,{ useState }  from 'react';
import styles from '../../../styles/Home.module.css';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';
import { X,Plus } from 'react-feather';
import useBoop from '../../../hooks/use-boop';
import Slider from '../Slider/Slider';
import styled from "styled-components";
import useToggle from '../../../hooks/use-toggle';



function GradientGen() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#000066',
  ]);

  const [numOfVisibleColors,setNumOfVisibleColors] = React.useState(3);
  const visibleColors = colors.slice(0,numOfVisibleColors)
  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`

  
  function addColor(){
    if(visibleColors.length >=5){
      return ;
    }
    const nextColor = [...colors];
    nextColor.push('#FF0000')
    setColors(nextColor)
    setNumOfVisibleColors(numOfVisibleColors + 1)
  }

  function removeColor(){
    if(visibleColors.length <=2){
      return ;
    }
    const nextColor = [...colors];
    nextColor.pop('#FF0000')
    setColors(nextColor)
    setNumOfVisibleColors(numOfVisibleColors - 1)
  }
  
  return (
    <>
      <button onClick={addColor}>Add Color</button>
      <div className={styles.mainwrapper}>
        <div className={styles.rowleft}>
        <h3>Colors :  </h3> 
          <form>
           {visibleColors.map((color,index) => {
            const colorId = `color-${index}`
              return (
                <>
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
                </>
              );
           })}
          </form>
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
      </div>
    </>
  );
}



export default GradientGen;



const Button = styled.button`
  background-color: hsl(212.73deg 12.36% 17.45%);
  border: 4px solid black;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  height: 120px;
  width: 120px;
  cursor: pointer;
  border-radius: 10px;
  &:hover{
    border: 4px solid white;
  }
`;

const AddIconPosition = styled.div`
  position: relative;
  margin: 0 auto;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonStuff = styled.div`
  border: red;
  background: hotpink;
  padding: 0;
  width: 96px;
  height: 96px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;