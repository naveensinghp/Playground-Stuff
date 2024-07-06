import React,{ useState }  from 'react';
import styles from '../../../styles/Home.module.css';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';
import { X,Plus } from 'react-feather';
import useBoop from '../../../hooks/use-boop';
import Slider from '../Slider/Slider';
import styled from "styled-components";
import useToggle from '../../../hooks/use-toggle';
// import Csscode from '../Csscode/Csscode';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const GradientGen = () => {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#000066',
    '#FF75FA',
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


  const Csscode = () => {
    const codeString = `background-image: linear-gradient(
      45deg,
      hsl(240deg 50% 81%) 0%,
      hsl(273deg 43% 80%) 11%,
      hsl(311deg 41% 81%) 22%,
      hsl(335deg 62% 84%) 33%,
      hsl(351deg 78% 87%) 44%,
      hsl(6deg 87% 88%) 56%,
      hsl(17deg 86% 87%) 67%,
      hsl(27deg 77% 87%) 78%,
      hsl(38deg 63% 87%) 89%,
      hsl(56deg 45% 88%) 100%
    );`;
    return (
      <SyntaxHighlighter language="css" style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    );
  }

  const removeColor = () => {
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
      {/* <button onClick={addColor}>Add Color</button>
      <button onClick={removeColor}>Remove Color</button> */}
      <MainWrapper>
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
         
          {/* <AddNew  addColor={addColor} /> */}
          {/* <RemoveBtn /> */}
          
          {/* <AddNew addColor={addColor} />  */}
          <h3>Colors Mode : </h3> 
          <ColorModes>
             <Button> LRGB </Button>
             <Button> HSL </Button>
             <Button> HSV </Button>
             <Button> HCL </Button>
             <Button> LAB </Button>
          </ColorModes>
          <Slider />
        </div>
        <Csscode/>
        
       
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
        
        
        {/* <a className={styles.tt1}>Hover Me</a>
        <div className={styles.tt2}>Stuff Shown on Hover</div> */}
           {/* <a className={styles.things}>Hover Me</a> */}
           {/* <TestAdd  /> */}
      </MainWrapper>
      <div className={styles.grr}>
          <h3>Your Gradient : </h3>
            <div 
              className={styles.csssnipet} 
              style={{
                backgroundImage,
              }}>
          </div>
        </div>
        {/* <FooterCard /> */}
    </>
  );
}

const AddNew = ({addColor}) => {
  console.log('addColor',addColor)
  const [defaultcolor,setDefaultColor] = React.useState('#FF0040')
  const [isClicked,setClicked] = React.useState(false)
  function onClickInput(){
    setClicked(true)

  }
  return(
    <Wrapper>
       <Button onClick={addColor}>
          <AddIconPosition>
              <Plus size={38} /> 
          </AddIconPosition>
       </Button>
    </Wrapper>
  );
}

const FooterCard = () => {
  <div style={{ color: 'white'}}>naveensingh</div>
}

const RemoveBtn = () => {
  return(
    <Wrapper>
       <Button>
          <ButtonHover>
              <X  size={38} />
          </ButtonHover>
       </Button>
    </Wrapper>
  );
}



function Test(){
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  const [isOn, toggleIsOn] = useToggle();
  return(
    <Wrapper>
       <input 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type='color' 
        className={styles.addcolor}   
      />
       {/* <X  size={52} />  */}
       {/* {isHovered ? <X  size={52} />  : undefined} */}
       {isOn ? <X  size={32} />  : undefined}
       <Spacer size={22} />
       {isOn ? 'The light is on! ' + isOn : 'Hey who turned off the lights '  + isOn}
      <button onClick={toggleIsOn}>
        Press me
      </button>
       {/* <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: isHovered ? 'yellow' : 'red' }}
      >
        {isHovered ? 'Hovered!' : 'Not Hovered'}
      </div> */}
    </Wrapper>
  );
}


export default GradientGen;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

`;

const ColorModes = styled.div`

`

const ButtonHover = styled.div`
  /* display: none; */
  &:hover{
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    position: absolute;
    bottom: -50px;
    left: 48px;
  }
  
`;


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
  position: absolute;
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