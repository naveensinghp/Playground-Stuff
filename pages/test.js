import React from 'react';
import { motion } from 'framer-motion';
import styled from "styled-components";
import { range } from '../src/utils';
import useBoop from '../hooks/use-boop';
import { animated } from 'react-spring';
import { ArrowDown } from 'react-feather';
import GlobalStyles from "../src/components/GlobalStyles/GlobalStyles"

export default function Test() {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const [style,trigger] = useBoop({y : 8})
    return(
        <>
        <GlobalStyles />
        {/* <button onMouseEnter={trigger}>
          Show More
          <animated.span style={style}>
          <ArrowDown />  
          </animated.span>
          
        </button> */}
        {/* <Backdrop /> */}
        {/* <ModalAnimation /> */}
        <Ballon />
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


function Ballon(){
  return(
    <>
       <svg width="150" height="250" xmlns="http://www.w3.org/2000/svg">
        {/* Balloon  */}
        <ellipse cx="75" cy="75" rx="45" ry="60" fill="red" />
         {/* Balloon Thread (curved)  */}
        <path d="M 75 135 Q 50 180, 75 200 Q 100 220, 75 230" stroke="black" stroke-width="2" fill="transparent"/>
      </svg> 
    </>
  );
}


function ModalAnimation(){
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Modal
      </button>
      <Modal
        title="Example Modal"
        isOpen={isOpen}
        handleDismiss={() => setIsOpen(false)}
      >
        Hello World
      </Modal>
    </>
  )
}

/*
  NOTE: This is NOT a very robust modal implementation.
  Please use something like Reach UI! This is a quick and
  dirty implementation to teach the animation concept.
*/
const Modal = ({ title, isOpen, handleDismiss }) => {
 console.log('id',isOpen);
  const ENTER_DURATION = '500ms';
  const EXIT_DURATION = '250ms';
  const ENTER_EASE = 'ease-out';
  const EXIT_EASE = 'ease-in';

  const transitionDuration = isOpen ? ENTER_DURATION : EXIT_DURATION;
  const ease = isOpen ? ENTER_EASE : EXIT_EASE;

  // Close modal on "Escape"
  React.useEffect(() => {
    function handleKeydown(ev) {
      if (ev.key === 'Escape') {
        handleDismiss();
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  return (
    <ModalWrapper
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
        // Set CSS variables that change when 'isOpen' changes
        '--transition-duration': transitionDuration,
        '--ease': ease,
      }}
    >
      <ModalBackdrop
        onClick={handleDismiss}
        style={{
          opacity: isOpen ? 0.75 : 0,
        }}
      />
      <ModalContentWrapper
        style={{
          transform: isOpen
            ? 'translateY(0%)'
            : 'translateY(100%)',
        }}
      >
        <ModalContent>
          <CloseButton onClick={handleDismiss}>
            {/*
              NOTE: Normally there'd be an icon
              and visually-hidden text here.
            */}
            Close
          </CloseButton>
          <Title>{title}</Title>
          <p>This is a modal!</p>
        </ModalContent>
      </ModalContentWrapper>
    </ModalWrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*
    Don't allow the slid-down modal to
    introduce a scrollbar.
  */
  overflow: hidden;
`

const ModalBackdrop = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  /* Use those CSS variables in the 'transition' declaration */
  transition: opacity var(--transition-duration) var(--ease);
`;

const ModalContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Use those CSS variables in the 'transition' declaration */
  transition: transform var(--transition-duration) var(--ease);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  height: 60%;
  margin: auto;
  background: white;
  padding: 32px;
  border-radius: 8px;
  pointer-events: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 32px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  display: grid;
  place-content: center;
  width: 64px;
  height: 64px;
  background: transparent;
  border: none;
  color: white;
`;


function Backdrop(){
  return (
    <>
      <div style={{display: 'flex',justifyContent:'center', }}>
          <Catimg>
            <img src="/cat.png" />
          </Catimg>
      </div>
      <Btn>
        Test
      </Btn>
    </>
  );
}

function BallonAnimation(){

}

const Btn = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 6px;
  border: 2px solid;
  will-change: transform;
  text-align: center;
  transition: transform 500ms;

  &:hover{
    transform : scale(1.1);
    transition: transform 150ms;
  }
`

const Catimg = styled.div`
  filter: blur(14px);
`

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




