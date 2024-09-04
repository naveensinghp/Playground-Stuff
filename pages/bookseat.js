import styled from "styled-components";
import React, { useState } from 'react';
import { range, seatNumber } from "../src/utils";
import GlobalStyles from "../src/components/GlobalStyles/GlobalStyles";


export default function BookSeat() {
    const id = React.useId();
    //const uniquePlanId = `${id}-${plan.id}`;
    const [activeIndex, setActiveIndex] = useState(null);
    const  handleClick = (index) => {
        setActiveIndex(index);
    }
    return(
        <>
            {/* <GlobalStyles /> */}
            <Wrapper>
                <h1>Budget</h1>
                  {seatNumber.map((data) => {
                    const uniquePlanId = `${id}-${data.id}`;
                    return(
                        <Wrapperout
                            key={uniquePlanId}
                        >
                            <h1>{data.seat}</h1>
                            {data.seatno.map((num,index) => (
                                <SeatNums 
                                    variant={num}
                                    active={index === activeIndex}
                                    onClick={() => handleClick(index)}> {num}
                                </SeatNums>
                            ))} 
                              <h1>{data.seat}</h1>
                        </Wrapperout>
                    );
                  })}
                  
            </Wrapper>
        </>
    );
}


const Wrapper = styled.section`
    display: grid;
    gap: 16px;
    place-content: center;
    height: calc(100vh - 16px);
`;

const Wrapperout = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
`

const SeatNums = styled.button`
    width: 30px;
    height: 30px;
    font-size: 12px;
    background-color: ${props => props.active ? '#ffcb05' : 'white'}; 
    border: 1px solid ${props => props.active ? '#ffcb05' : '#7a7a7a'};
    visibility: ${props => {
    if (props.variant.includes('x')) {
      return 'hidden';
    }else {
        return 'visible'; 
    } 
    }}; 
    border-radius: 4px;
    cursor: pointer;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
     &:hover{
        background-color: #ffcf14;
    } 
`;

const Seatbooked = styled(SeatNums)`
  background-color: #e5e5e5;
  color: #7a7a7a;
  cursor: default;
  &:hover{
        background-color: #e5e5e5
  }
`