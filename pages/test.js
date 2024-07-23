import App from '../src/components/App/App'
import GlobalStyles from '../src/components/GlobalStyles/GlobalStyles';
import Csscode from '../src/components/Csscode/Csscode';
import Slider from '../src/components/Slider/Slider';
import { useState } from 'react';
import React from 'react';
import styled from "styled-components";


export default function Test() {
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
        <RadioBtnWrapper>
            <CustomRadioLabel>
                <CustomRadioInput name="radioGroup" value="option1" />
                HSL
                </CustomRadioLabel>
          </RadioBtnWrapper>
                
        </>
    );
}

const CustomRadioInput = styled.input.attrs({ type: 'radio' })`
  margin : 5px; /* Adjust spacing as needed */
  &:checked {
    border-color: #007bff; /* Example border color */
    background-color: red; /* Example background color */
    border-style: dotted;
  }
`;


const CustomRadioLabel = styled.label`
  cursor: pointer;
  line-height: 1.5; 
`;

const RadioBtnWrapper = styled.div`
  background: #32E0C4;
  color: #fff;
  padding: 10px;
  width: 200px;
  border-radius: 8px; 
`




