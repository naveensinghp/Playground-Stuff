import styled from "styled-components";
import { useState } from 'react';
import { range } from "../src/utils";


export default function BookSeat() {
    const [activeIndex, setActiveIndex] = useState(null);
    const  handleClick = (index) => {
        setActiveIndex(index);
    }
    return(
        <>
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
                {range(10).map((num,index) => (
                    <div style={{ 
                        paddingLeft: '2rem'
                    }}>
                        <SeatNums 
                            key={index}
                            active={index === activeIndex}
                            onClick={() => handleClick(index)}
                            >{num}
                        </SeatNums>
                    </div>
                ))} 
            </div>
        </>
    );
}

const SeatNums = styled.button`
    width: 35px;
    height: 35px;
    background-color: ${props => props.active ? '#ffcb05' : 'white'}; 
    border: 1px solid ${props => props.active ? '#ffcb05' : '#7a7a7a'};;
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