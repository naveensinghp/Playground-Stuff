import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { range, seatNumbe_two, seatNumber } from "../src/utils";
import GlobalStyles from "../src/components/GlobalStyles/GlobalStyles";
import Spacer from "../src/components/Spacer";
import useToggle from "../hooks/use-toggle";


export default function BookSeat() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedSeat, setClickedSeat] = useState(null);
    const [isSeatBooked,setSeatBooked] = useState(false);
    
    
    

   const toggleSeatRowActive = (rowId) => {
    setActiveIndex(prevActiveRows =>
      prevActiveRows &&  prevActiveRows.includes(rowId)  ? prevActiveRows.filter(id => id !== rowId) : [...prevActiveRows, rowId]
      );
   }
   const  bookticket = () => {
        alert(isSeatBooked);
    }
   
    return(
        <>
            {/* <GlobalStyles /> */}
            <Wrapper>
                  {seatNumber.map((data) => {
                    const uniquePlanId = `${data.seat}-${data.id}`;
                    return(
                        <Wrapperout
                            key={uniquePlanId}
                        >
                            <h1>{data.seat}</h1>
                            {data.seatno.map((seatno,index)=> {
                                const rowindex = `${data.seat}-${index}`
                                return(
                                    <SeatNums 
                                        key={rowindex}
                                        variant={seatno}
                                        // active={rowindex === activeIndex}
                                        // onClick={() => handleClick(str,rowindex)}
                                        // isActive={activeRows.includes(row.id)}
                                        onClick={() => toggleSeatRowActive(index)}
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
                  <BookTicketBtn onClick={() => bookticket()}>Book Ticket</BookTicketBtn>
                  <Spacer size={10} /> 
                  <TableComponent />
                  <SeatNums  variant={'S'}>
                    <img src="/wheelchair.svg" alt="bookmymovielogo" width={20}/>
                  </SeatNums>
            </Wrapper>
        </>
    );

}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  cursor: pointer;
  background-color: ${props => props.isActive ? 'yellow' : 'white'};
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const TableComponent = () => {
    const [activeRows, setActiveRows] = useState([]);
    const toggleRowActive = (rowId) => {
        setActiveRows(prevActiveRows =>
          prevActiveRows.includes(rowId)
            ? prevActiveRows.filter(id => id !== rowId)
            : [...prevActiveRows, rowId]
        );
      };
      const rows = [
        { id: 1, name: 'Row 1' },
        { id: 2, name: 'Row 2' },
        { id: 3, name: 'Row 3' },
      ];
    return(
        <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <TableRow
              key={row.id}
              isActive={activeRows.includes(row.id)}
              onClick={() => toggleRowActive(row.id)}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
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