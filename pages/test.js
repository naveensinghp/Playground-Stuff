import App from '../src/components/App/App'
import GlobalStyles from '../src/components/GlobalStyles/GlobalStyles';
import Csscode from '../src/components/Csscode/Csscode';
import Slider from '../src/components/Slider/Slider';
import { useState } from 'react';
import React from 'react';
import styled from "styled-components";
import { alphabets, range, seatNumber } from '../src/utils';
import Spacer from '../src/components/Spacer/Spacer';
import useToggle from '../hooks/use-toggle';


export default function Test() {
    const [isSeatClicked, setSeatClick] = useToggle();
    const [childData, setChildData] = useState('');
    const [count,setCount] = useState(0);
    const deferredCount = React.useDeferredValue(count);
    const codeString = `width: ${childData}%`;
    const handleChildData = (data) => {
        setChildData(data);
      };
    return(
        <>
        
            {/* {'Test'}-{childData ? childData : undefined}
           <Slider onData={handleChildData} />
           <Csscode code={codeString} /> 
           <GlobalStyles /> */}
        {/* <RadioBtnWrapper>
            <CustomRadioLabel>
                <CustomRadioInput name="radioGroup" value="option1" />
                HSL
                </CustomRadioLabel>
          </RadioBtnWrapper> */}
          {/* {range(10).map((num) => (
             <SeatNums>{num}</SeatNums>
            ))} */}
           {/* <Grid>
            

              {range(10).map((num) => (
                <div>
                    naveen
                </div>
              ))} 
           
            </Grid> */}
              {/* {seatNumber.map((data) => (
                <div style={{
                  display: 'flex'
                }}>
                    {data.seat}
                </div>
              ))}  */}
              <div>
                  <SeatNums 
                    background={getColor}
                    onClick={setSeatClick}
                  >63
                  </SeatNums>
              </div>
              <Spacer size={22} />

              <div style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}>
                <div style={{
                  background: 'hotpink',
                  gap: '20px',
                  display: 'grid',
                  placeContent: 'center'
                }}>
                  <div>A</div> 
                  
                </div>
                
                {range(10).map((num) => (
                <div style={{ 
                  paddingLeft: '2rem'
                }}>
                    <SeatNums >{num}</SeatNums>
                </div>
                ))} 
                
              </div>
        </>
    );
  function getColor() {
      return isSeatClicked ? '#ffcb05' : 'white';
  };
}


const SeatNums = styled.button`
    width: 35px;
    height: 35px;
    background-color: ${props => props.background};
    border: 2px solid black;
    border-radius: 4px;
    cursor: pointer;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
     &:hover{
        background-color: #ffcf14;
        /* translate: 0px -16px;
        transition: 200ms linear 50ms; */
    } 
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
`;





