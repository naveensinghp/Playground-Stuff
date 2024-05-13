import React from 'react';
import styles from '../../../styles/Home.module.css';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';

function GradientGen() {
  const [colors, setColor] = React.useState('#00BCD4');
  const defaulColors = [
    {
      id: 2,
      colors: "#FFEB3B",
    },
   {
      id: 1,
      colors: "#000066",
   },
   
  {
    id: 3,
    colors: "#FFEB3B",
  },
  {
    id: 4,
    colors: "#000066",
  },
  ]

  return (
    <>
      <div style={{ display: 'flex',flexDirection: 'row', gap: '20px' }}>
        {/* left side */}
          <div>
          {
              defaulColors.map((data) => (
                  <input 
                    key={data.id}
                    type="color" 
                    name="color" 
                    value={data.colors}
                    onChange={setColor}
                    style={{ width: '100px',height: '100px', cursor: 'pointer'}} 
                />
              ))
           }
          </div>
           {/* right side */}
           <div className="">
            <input 
                type="color" 
                name="color" 
                value='#000066'
                style={{ 
                  width: '500px',
                  height: '520px', 
                  cursor: 'pointer',
                  borderRadius: '12px'
                }} 
            />
        </div>
      </div>
    </>
  );
}

export default GradientGen;
