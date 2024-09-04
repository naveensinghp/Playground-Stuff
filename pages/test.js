import React from 'react';
import { motion } from 'framer-motion';


export default function Test() {
  const [isEnabled, setIsEnabled] = React.useState(true);
    return(
        <>
          <div>
             <button onClick={() => setIsEnabled(!isEnabled)}>Toggle - {isEnabled}</button>
          </div>
        </>
    );
}






