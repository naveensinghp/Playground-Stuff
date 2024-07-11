import React,{ useState }  from 'react';
import styles from '../../../styles/Home.module.css';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';
import { X,Plus } from 'react-feather';
import useBoop from '../../../hooks/use-boop';
import Slider from '../Slider/Slider';
import styled from "styled-components";
import useToggle from '../../../hooks/use-toggle';
import Csscode from '../Csscode/Csscode';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Radiobutton from '../Radiobutton/Radiobutton';


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
      <MainWrapper>
        <ColorModes>
          <h3>Colors :  </h3> 
          <form style={{ display : 'flex', flexDirection: 'row'}}>
          {visibleColors.map((color,index) => {
            const colorId = `color-${index}`
              return (
                <Colorsection key={colorId}>
                  <input 
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
                </Colorsection>
            );
           })}
          </form>
          <h3>Colors Modes :  </h3> 
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <RadioBtnWrapper>
              <CustomRadioLabel>
              <RadioButton 
                type='radio'
              />HSL
              <CustomRadioMark />
              </CustomRadioLabel>
            </RadioBtnWrapper>

            <label>
        <CustomRadioInput name="radioGroup" value="option1" />
        Option 1
      </label>
           
           {/* <Radiobutton>ff</Radiobutton> */}
          {/* <Button>Nes</Button>
          <Button>Nes</Button>
          <Button>Nes</Button>
          <Button>Nes</Button> */}
          </div>
          
        </ColorModes>
        <Csscode />
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
       {isOn ? <X  size={32} />  : undefined}
       <Spacer size={22} />
       {isOn ? 'The light is on! ' + isOn : 'Hey who turned off the lights '  + isOn}
      <button onClick={toggleIsOn}>
        Press me
      </button>
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
  display: flex;
  flex-direction: column;
`

const Colorsection = styled.div`
  
`;

const CustomRadioMark = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 20px; /* Size of the custom radio button */
  height: 20px; /* Size of the custom radio button */
  border: 2px solid red; /* Border color */
  border-radius: 50%; /* Round shape */
`;

const CustomRadioMarkSelected = styled(CustomRadioMark)`
  background-color: hotpink; /* Fill color when selected */
  border: 2px solid yellow;
`;

const CustomRadioInput = styled.input.attrs({ type: 'radio' })`
  /* Your custom CSS goes here */
  /* Example styles: */
  margin-right: 5px; /* Adjust spacing as needed */
  &:checked {
    /* Style for checked state */
    border-color: #007bff; /* Example border color */
    background-color: red; /* Example background color */
  }
`;

const CustomRadioLabel = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  line-height: 1.5; 
  &:input{
    
  }
 
`;


const RadioBtnWrapper = styled.div`
  background: #32E0C4;
  color: #fff;
  padding: 10px;
  width: 200px;
  border-radius: 8px;
 

`

const RadioButton = styled.input`
  display: none;
  background : hotpink;
  width: 25px;

`;

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