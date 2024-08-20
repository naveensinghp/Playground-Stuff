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
      seatno: ['1','2','3','4','5','6','7','8','9','10','11',' 12','13','14','15','16','17','18','19','20']
  },
  {
      id:2,
      seat: "B",
      seatno: ['1','2','3','4','5','6','7','8','NULL','NULL','9','10','12','13','14','15','16','17']
  },
  {
      id:3,
      seat: "C",
      seatno: ['1','2','3','4','5','6','7','8','NULL','NULL','9','10','12','13','14','15','16','17']
  },
  {
      id:4,
      seat: "D",
      seatno: ['1','2','3','4','5','6','7','8','NULL','NULL','9','10','12','13','14','15','16','17']
  },
  {
      id:5,
      seat: "E",
      seatno: ['1','2','3','4','5','6','7','8','NULL','NULL','9','10','12','13','14','15','16','17']
  }
]