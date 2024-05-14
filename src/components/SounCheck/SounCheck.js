import React from 'react';
import useSound from 'use-sound';



function SounCheck() {
  const [isChecked,setIschecked] = React.useState(false);

  const [playActive] = useSound(
    '/sounds/pop.mp3',
    { volume: 0.25}
  )
  const [playOn] = useSound(
    '/sound/pop-up-down.mp3',
    {volume : 0.22}
  );

  const [playOff] = useSound(
    '/sound/pop-up-down.mp3',
    {volume : 0.22}
  );
  return <div>
    <input 
       type="checkbox" 
        onChange={() => setIschecked(!isChecked)}
        onMouseDown={playActive}
        onMouseUp={() => {
          isChecked ?  playOff() : playOn();
        }}
      />
  </div>;
}

export default SounCheck;
