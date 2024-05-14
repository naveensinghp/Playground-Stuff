import React from 'react';
import styles from '../../../styles/Home.module.css';
import { range } from '../../utils';
import Spacer from '../Spacer/Spacer';

function GradientGen() {
  // let fruits = ['apple', 'banana', 'cherry'];
  // fruits = ['honeydew']; 
  // console.log('fruits',fruits)
  const person = {
    name: 'Hassan',
  };
  
  person.name = 'Sujata';
  console.log(person);
//   const name = 'Arya';
// name = 'Stark';
// console.log(name)
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#000066'
  ]);
  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`
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
      <div className={styles.mainwrapper}>
        {/* left side */}
          <div className={styles.rowleft}>
            <form>
            {colors.map((color,index) =>{
              const colorId = `color -${index}`;
              return (
                <div key={colorId} style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    <label htmlFor={colorId}>
                      Color {index +1}
                    </label>
                    <input 
                      id={colorId}
                      type='color'
                      value={color}
                      onChange={setColors}
                    />
                </div>
              );
            })}
            </form>
            
              {/* {defaulColors.map((data) => (
                    <input 
                      key={data.id}
                      type="color" 
                      name="color" 
                      value={data.colors}
                      onChange={setColors}
                      style={{ width: '100px',height: '100px', cursor: 'pointer',margin: '10px'}} 
                  />
                ))
            }  */}
            <Spacer size={10} />
            <div>
                <h3>Color Mode : </h3>
                {defaulColors.map((data) => (
                    <input 
                      key={data.id}
                      type="color" 
                      name="color" 
                      value={data.colors}
                      onChange={setColors}
                      style={{ width: '100px',height: '100px', cursor: 'pointer', margin: '10px'}} 
                  />
                ))
            } 
            </div>   
          </div>
          
           {/* right side */}
           <div className={styles.rowright}>
            {/* <input 
                type="color" 
                name="color" 
                value='#000066'
                style={{ 
                  width: '500px',
                  height: '520px', 
                  cursor: 'pointer',
                  borderRadius: '12px'
                }} 
            /> */}
             <Spacer size={10} />
             <h3>Your Gradient : </h3>
           <div className={styles.csssnipet} style={{
          backgroundImage,
        }}>

           </div>
        </div>
      </div>
    </>
  );
}

export default GradientGen;
