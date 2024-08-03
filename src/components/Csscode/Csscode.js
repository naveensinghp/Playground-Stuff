import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Copy } from 'react-feather';
import styled from 'styled-components';

const Csscode = ({code}) => {
  const codeString = `background-image: linear-gradient(
    45deg,
    hsl(240deg 50% 81%) ${code}%,
    hsl(273deg 43% 80%) 11%,
    hsl(311deg 41% 81%) 22%,
    hsl(335deg 62% 84%) 33%,
    hsl(351deg 78% 87%) 44%,
    hsl(6deg 87% 88%) 56%,
    hsl(17deg 86% 87%) 67%,
    hsl(27deg 77% 87%) 78%,
    hsl(38deg 63% 87%) 89%,
    hsl(56deg 45% 88%) 100%
  );`;
 // const codeString = `${code}`;
  return <>
  <Wrapper>
    <Copy />
    <SyntaxHighlighter language="css" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  </Wrapper>
  </>
}

export default Csscode;



const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
`;
