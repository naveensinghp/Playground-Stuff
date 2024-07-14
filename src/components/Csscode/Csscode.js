import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Csscode = () => {
  const codeString = `background-image: linear-gradient(
    45deg dd,
    hsl(240deg 50% 81%) 0%,
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
  return <>
    <SyntaxHighlighter language="css" style={materialDark}>
      {codeString}
    </SyntaxHighlighter>
  </>
}

export default Csscode;
