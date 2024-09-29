import React from 'react';
import { motion } from 'framer-motion';
import styled from "styled-components";
import { range } from '../src/utils';
import useBoop from '../hooks/use-boop';
import { animated } from 'react-spring';
import { ArrowDown } from 'react-feather';

export default function Test() {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [style,trigger] = useBoop({y : 8})
    return(
        <>
        <button onMouseEnter={trigger}>
          Show More
          <animated.span style={style}>
          <ArrowDown />  
          </animated.span>
          
        </button>
          {/* <CheckPartent>
             {range(32).map((num) =>( 
              <CheckChildTest>
                {num}
              </CheckChildTest>
          ))}
          </CheckPartent> */}
        </>
    );
}

const CheckPartent = styled.div`
  width: 340px;
  padding: 4px;
  border: 1px solid hsl(210deg 10% 40%);
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: repeat(7,1fr);
  grid-template-areas: 'sidebar header';
`;

const CheckChildTest = styled.div`
  grid-row: 3;
  
  background: black;
  padding: 10px;
  color: white;
  border: 2px solid #75808a;
`;

const Child = styled.div`
  display: grid;
  place-content: center;
  height: 100px;
  border:
    2px solid hsl(210deg 8% 50%);
    border-radius: 3px;
    background: hsl(210deg 15% 20%);
  color: white;
  font-size: 1.325rem;
  font-weight: bold;
  &:first-child{
    margin-right: 2px;
  }
  &:last-child{
    margin-right: 2px;
  }
`;

const Parent = styled.div`
   --padding: 4px;
   position: relative;
   padding: var(--padding);
   border: 1px solid hsl(210deg 10% 40%);
   border-radius: 8px;
   &::after{
    content: '';
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: calc(
    25% +
    var(--padding) / 2 -
    1px
  );
  border-left:
    2px dashed
    hsl(210deg 8% 50%);
   }
`




