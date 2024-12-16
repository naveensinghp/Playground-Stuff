import GlobalStyles from "../src/components/GlobalStyles/GlobalStyles"
import styled, { keyframes } from "styled-components";


export default function Calc() {
    return <>
        <GlobalStyles />
        {/* <h1>
           Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </h1> */}
        <HandAnimation>
          👋
        </HandAnimation>
    </>
}

const wave = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: translate(30deg);
  }
`;

const HandAnimation = styled.p`
  display:inline-block;
  font-size: 3rem;
  animation : ${wave} 1000ms infinite alternate ease-in-out;
  /* transform-origin: center bottom; */
`

const Button = styled.table`
  width: 100%;
`;