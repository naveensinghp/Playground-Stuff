import React from 'react';

export const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 1;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
  };
  

export const alphabets = [
  {
    id: '1',
    letter: 'A',
    totalseat: 20
  },
  {
    id: '2',
    letter: 'B',
    totalseat: 20
  },
  {
    id: '3',
    letter: 'C',
    totalseat: 20
  },
];



export const seatNumber = [
  {
      id:1,
      seat: "A",
      status: 'booked',
      seatno: ['x','x','1','2','3','4','5','6','7','8','9','10','x','x','12','13','14']
  },
  {
      id:2,
      seat: "B",
      seatno: ['x','x','1','2','3','4','5','6','7','8','x','x','9','10','12','13','14']
  },
  {
      id:3,
      seat: "C",
      seatno: ['x','x','1','2','3','4','5','6','7','8','x','x','9','10','12','13','14']
  },
  {
      id:4,
      seat: "D",
      seatno: ['x','x','1','2','3','4','5','6','7','8','x','x','9','10','12','13','14']
  },
  {
      id:5,
      seat: "E",
      seatno: ['x','x','1','2','3','4','5','6','7','8','x','x','9','10','12','13','14']
  }
]


//export const range = (start, end, step = 1) => {


export const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

