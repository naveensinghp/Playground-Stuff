import styled from "styled-components";
import { useState } from 'react';
import { range, seatNumber } from "../src/utils";


export default function BookSeat() {
    const [activeIndex, setActiveIndex] = useState(null);
    const  handleClick = (index) => {
        setActiveIndex(index);
    }
    return(
        <>
            <Wrapper>
            {seatNumber.map((data) => (
                <Wrapperout
                 key={data.id}
                >
                {data.seatno.map((num,index) => (
                <SeatNums 
                    variant={num}
                    active={index === activeIndex}
                    onClick={() => handleClick(index)}>{num}
                </SeatNums>
                ))}    
                </Wrapperout>
            ))}
            </Wrapper>
        </>
    );
}


const Wrapperout = styled.div`
    display: flex;
    gap: 16px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const SeatNums = styled.button`
    width: 35px;
    height: 35px;
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