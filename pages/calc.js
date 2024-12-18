import GlobalStyles from "../src/components/GlobalStyles/GlobalStyles"
import styled, { keyframes } from "styled-components";
import React, { PureComponent } from 'react';
class Beizer extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      startingPoint: {x: 10,y:10},
      controlPoint: {x: 190,y: 100},
      endPoint: {x: 10,y: 190},
      draggingPointId : null, 
    };
  }

  handleMouseDown(pointId){
    this.state({draggingPointId : pointId})
  }

  handleMouseUp(){
    this.state({draggingPointId : null})
  }

  handleMouseMove({clientX,clientY}){
    const {viewBoxWidth,viewBoxHeight} = this.props;
    const { draggingPointId } = this.state;

    if(!draggingPointId){
      return 
    }

    const svgRect = this.node.getBoundingClientRect();
    console.log('ddd',svgRect);
  }
 
  render() {
    
    return (
      <div>
        <h2>Pure Component</h2>
        <p>Count: {this.props.count}</p>
      </div>
    );
  }
}

export default Beizer;


// export default function Calc() {
//     return <>
//         <GlobalStyles />
//         <HandAnimation>
//           👋
//         </HandAnimation>
//         <Svg
//           viewBox="0 0 300 300"
//          fill="none"          
//         >
//           <path 
//             d="
//               M 100,100
//               L 200,100
//               L 200,200
//               L 100,200
//               L 100,100
//             "
//             stroke="hotpink"
//             storke-width="5"
//           />
          
//           {/* <rect 
//             x="40"
//             y="15"
//             width="30"
//             height="65"
//             fill="hotpink"
//           />
//           <ellipse
//             cx="30" cy="60"
//             rx="20" ry="20"
//             fill="lightsalmon"
//           />
//           <polygon 
//             points="15,80 30,55 45,80"
//             fill="turquoise"
//           /> */}
//         </Svg>
//         <Svg 
//           viewBox="0 0 200 200"
//           width="200"
//         >
//           <path 
//             d="
//               M 25,25
//               C 100,50 25,75 25,100
//               C 25,125 300,150 25,175
//             "
//             fill="none"
//             stroke="hotpink"
//             stroke-width="5"
//           />

//         </Svg>
//     </>
// }

const Svg = styled.svg`

`



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