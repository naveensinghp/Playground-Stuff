import React from 'react';
import styled from "styled-components";

function Radiobutton({children}) {
  console.log('ff',{children});
  return <>
    <RadioBtnWrapper>
    <Radiobtn
      type='radio'
    >
      <CustomRadioLabel>
      {children}
      </CustomRadioLabel>
      
    </Radiobtn>
  </RadioBtnWrapper>
  </>;
}


const CustomRadioLabel = styled.label`
  position: relative;
  padding-left: 30px; /* Adjust according to your design */
  cursor: pointer;
  line-height: 1.5; /* Adjust to vertically align with the text */
`;

const RadioBtnWrapper = styled.div`
  background: #fff;
  color: black;
  padding: 10px;
  width: 200px;
  border-radius: 8px;

`

const Radiobtn = styled.input`
  background : hotpink;
  width: 25px;

`;

export default Radiobutton;
