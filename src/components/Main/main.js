import React from 'react';
import './Main.css';

import Sign from '../Sign/Sign.js';
import { zodiac } from '../../data.js';

console.log(zodiac);

export default function Main() {
  return (
    <main>
      {zodiac.map((sign) => (
        <Sign key={sign.name}
          name={sign.name}
          dates={sign.dates}/>
      ))}
    </main>
  );
}