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
        <ModalAnimation />
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


function ModalAnimation(){
  const [isOpen,setIsOpen] = React.useState(false);
  return(
    <>
      <button 
          onClick={() => setIsOpen(!open)}
        >
        Toggle Modal
      </button>
      <Modal
          title="Example Modal"
          isOpen={isOpen}
          handleDismiss={() => setIsOpen(false)}
        >
          Shall We Begin
      </Modal>
    </>
  );
}

const Modal = ({title,isOpen,handleDismiss}) => {
  const ENTER_DURATION = '500ms';
  const EXIT_DURATION = '250ms';
  const ENTER_EASE = 'ease-out';
  const EXIT_EASE ='ease-in';

  const transitionDuration = isOpen ? ENTER_DURATION : ENTER_DURATION;
  const ease = isOpen ? ENTER_EASE : EXIT_EASE; 
  // Close Modal on "Escape"
  React.useEffect(() => {
    function handleKeyDown(ev){
      if(ev.key === 'Escape'){
        handleDismiss();
      }
    }
    window.addEventListener('keydown',handleKeyDown);
    return () => {
      window.removeEventListener('keydown',handleKeyDown)
    }
  });

  return (
    <ModalWrapper 
      style={{pointerEvents : isOpen }}
      >
      <ModalBackdrop>
        <ModalContentWrapper>
          <ModalContent>
            <CloseButton>

            </CloseButton>
          </ModalContent>
        </ModalContentWrapper>
      </ModalBackdrop>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ModalBackdrop = styled.div`
  
`
const ModalContentWrapper = styled.div`

`

const ModalContent = styled.div`

`

const CloseButton = styled.button`


`

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




