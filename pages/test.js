import App from '../src/components/App/App'
import GlobalStyles from '../src/components/GlobalStyles/GlobalStyles';
import Csscode from '../src/components/Csscode/Csscode';
import Slider from '../src/components/Slider/Slider';
import { useState } from 'react';
import React from 'react';


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
            {'Test'}-{childData ? childData : undefined}
           <Slider onData={handleChildData} />
           <Csscode code={codeString} /> 
           <GlobalStyles />
           {/* <h1>Value - {count}</h1>
           <ImportStuff count={count} />
           <br/>
           <SlowStuff count={deferredCount} /> 
           <br/>
           <button onClick={() => setCount(count + 1)}>
                Increment
            </button> */}
           
        </>
    );


    function ImportStuff({count}){
        console.log(count)
        return(<>
        
        'FastStuff ' + {count}
        </>
               
        );
    }
    function SlowStuff({count}){
        return(
            <>
                'SlowStuff ' + {count}
            </>
        );
    }
}




