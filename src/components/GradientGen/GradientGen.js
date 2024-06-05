import React from 'react';
import styles from '../../../styles/Home.module.css';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';
import { X,Plus } from 'react-feather';
import useBoop from '../../../hooks/use-boop';
import Slider from '../Slider/Slider';
import styled from "styled-components";



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
  
  return (
    <>
      <button onClick={addColor}>Add Color</button>
     
      <button>Remove Color</button>
      <div className={styles.mainwrapper}>
        <div className={styles.rowleft}>
          <h3>Colors :  </h3> 
          <form>
            {/* {colors.map((color,index) =>{
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
            })} */}
            {/* {range(3).map((num) => (
             <input 
               key={num}
               className={styles.addcolor}
               value="#000066"
               type='color'
             />
           ))} */}
           {visibleColors.map((color,index) => {
            const colorId = `color-${index}`
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
          <h3>Colors Mode : </h3>
          <div >
            <label>
               <input type="radio" /> Male
            </label>
          </div>
          
          {/* <Slider /> */}
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
        {/* <div 
            className={styles.testhover} 
            style={{ display: 'flex',flexDirection: 'column',alignItems: 'end' }}>
             <span style={style}>
              <span className="viewarrow"> &nbsp; 
                <input 
                  type='color' 
                  className={styles.addcolor} 
                  onChange={setColors}  
                  onMouseEnter={trigger}  />
                   <X className={styles.closeicon} size={36} /> 
              </span>
            </span>
        </div>   */}
        {/* <Test /> */}
        {/* <a className={styles.tt1}>Hover Me</a>
        <div className={styles.tt2}>Stuff Shown on Hover</div> */}
           {/* <a className={styles.things}>Hover Me</a> */}
         {/* <TestAdd /> */}
      </div>
    </>
  );
}

function TestAdd(){
  const [defaultcolor,setDefaultColor] = React.useState('#FF0040')
  const [isClicked,setClicked] = React.useState(false)
  function onClickInput(){
    setClicked(true)

  }
  return(
    <Wrapper>
       <input 
        type='color' 
        value={defaultcolor}
        className={styles.addcolor}
        onChange={setDefaultColor}   
      />
      <AddIconPosition>
        <Plus size={28} /> 
       </AddIconPosition>
    </Wrapper>
  );
}

function Test(){
  return(
    <Wrapper>
       <input 
        type='color' 
        className={styles.addcolor}   
      />
       <X className={styles.closeicon} size={28} /> 
    </Wrapper>
  );
}

export default GradientGen;

const AddIconPosition = styled.div`
  position: relative;
  margin: 0 auto;
  top: -68px;
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