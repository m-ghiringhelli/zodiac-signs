import React from 'react';
import './Sign.css';

export default function Sign(props) {
  return <div className='sign'>
    <img src={`./signs/${props.name}.png`}></img>
    <h2>{`${props.name}`.toUpperCase()}</h2>
    <span>{`${props.dates}`}</span>
  </div>;
}