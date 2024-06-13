import React from 'react';
import styled from "styled-components";

function Button({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.button`
  background-color: hotpink;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  height: 140px;
  width: 120px;
  cursor: pointer;
`;
