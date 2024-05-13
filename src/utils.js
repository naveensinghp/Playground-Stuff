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
  