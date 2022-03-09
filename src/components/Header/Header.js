import React from 'react';
import './Header.css';

export default function Header() {
  return <header style={{
    backgroundImage: `url(./signs/zodiac.png)`,
    backgroundPosition: `center`,
  }}>
    <h1>Signs of the Zodiac</h1>
  </header>;
}