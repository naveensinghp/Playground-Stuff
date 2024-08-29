import styled from "styled-components";
import { useState } from 'react';
import { range, seatNumber } from "../src/utils";


export default function BookSeat() {
    const [activeIndex, setActiveIndex] = useState(null);
    const  handleClick = (seatrow,seatnumber, index) => {
        let seatSelected = seatrow + seatnumber;
        console.log('seat',seatSelected);
        setActiveIndex(index);
    }
    return(
        <>
            <Wrapper>
                {seatNumber.map((data) => (
                    <Wrapperout>
                        {data.seatno.map((num,index) => (
                            <SeatNums 
                                key={index}
                                variant={num}
                                active={index === activeIndex}
                                onClick={() => handleClick(data.seat,num,index)}>{index}
                            </SeatNums>
                        ))}    
                    </Wrapperout>
                ))}
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