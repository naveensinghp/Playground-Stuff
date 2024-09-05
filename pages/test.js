import React from 'react';
import { motion } from 'framer-motion';
import styled from "styled-components";


export default function Test() {
  const [isEnabled, setIsEnabled] = React.useState(true);
    return(
        <>
          {/* <div>
             <button onClick={() => setIsEnabled(!isEnabled)}>Toggle - {isEnabled}</button>
          </div> */}
          <Parent>
            <Child>1</Child>
            <Child>2</Child>
          </Parent>
        </>
    );
}


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




