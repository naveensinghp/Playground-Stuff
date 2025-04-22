import React from 'react';
import useRainbow from './use-rainbow.hook';
import styled from "styled-components";



const MagicRainbowButton = ({
  children,
  intervalDelay = 1300,
  ...delegated
}) => {
  const transistionDelay = intervalDelay * 1.25;
  const colors = useRainbow({ intervalDelay })
  const colorKey  = Object.keys(colors); 
  return(
    <ButtonDom 
        {...delegated}
        style={{
          ...colors,
         transition: `
           ${colorKeys[0]} ${transitionDelay}ms linear,
          ${colorKeys[1]} ${transitionDelay}ms linear,
          ${colorKeys[2]} ${transitionDelay}ms linear
         `,
         background: `
         radial-gradient(
           circle at top left,
           var(${colorKeys[2]}),
           var(${colorKeys[1]}),
           var(${colorKeys[0]})
         )
       `,
        }}
      >
        {children}
    </ButtonDom>
  );
}

const ButtonDom = styled.div`
  position: relative;
  border: none;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
`;

export default MagicRainbowButton;
