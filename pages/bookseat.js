import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { range, seatNumbe_two, seatNumber } from "../src/utils";
import GlobalStyles from "../src/components/GlobalStyles/GlobalStyles";
import Spacer from "../src/components/Spacer";
import useToggle from "../hooks/use-toggle";


export default function BookSeat() {
    // const id = React.useId();

    // const [colors, setColors] = React.useState([
    //     'A1',
    //     'A2',
    //   ]);
      
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedSeat, setClickedSeat] = useState(null);
    const [isSeatBooked,setSeatBooked] = useState(false);
    const [isOn, toggleIsOn] = useToggle();
    
    const  handleClick = (seatno,index) => {
        if(selectedSeat == seatno){
            // alert('same Seat Clicked');
            setSeatBooked('');
            return 
        }
        // const nextSeats = [...seatno]
        //  nextSeats.push(seatno);
        console.log('next',seatno);
        setClickedSeat(seatno)
        setActiveIndex(index);
        setSeatBooked(true)
        console.log("ROw Index",index);
                                console.log("Active Index",activeIndex)
    }

   const  bookticket = () => {
        alert(isSeatBooked);
    }
   
    return(
        <>
        {isOn ? 'The light is on!' : 'Hey who turned off the lights'}
            {/* <GlobalStyles /> */}
            <Wrapper>
                <h1>Gradient - {selectedSeat} - {isOn}</h1>
                  {seatNumber.map((data) => {
                    const uniquePlanId = `${data.seat}-${data.id}`;
                    return(
                        <Wrapperout
                            key={uniquePlanId}
                        >
                            <h1>{data.seat}</h1>
                            {data.seatno.map((seatno,index)=> {
                                const rowindex = `${data.seat}-${index}`
                                const clickedSeat = `${data.seat}${''}${seatno}`
                                return(
                                    <SeatNums 
                                        key={rowindex}
                                        variant={seatno}
                                        active={rowindex === activeIndex}
                                        onClick={() => handleClick(clickedSeat,rowindex)}
                                    >
                                        {seatno}
                                    </SeatNums>
                                )
                            })}
                            <h1>{data.seat}</h1>
                        </Wrapperout>
                    );
                  })}
                  <Spacer size={50} /> 
                  <button onClick={toggleIsOn}>
        Press me
      </button>
                  <BookTicketBtn onClick={() => bookticket()}>Book Ticket</BookTicketBtn>
            </Wrapper>
        </>
    );
}


const BookTicketBtn = styled.button`
 background-color: #ffcb05;
 cursor: pointer;
 color: black;
 height: 50px;
 border: none;
 border-radius: 12px;
`;

const Wrapper = styled.section`
    display: grid;
    place-content: center;
    /* height: calc(50vh - 16px); */
    font-family: "Comfortaa", sans-serif;
`;

const Wrapperout = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    align-items: center;
    height: 50px;
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