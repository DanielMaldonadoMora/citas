import React from 'react';
import { useState } from 'react';
import Citas from './citas.json';

const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  

const Box = () => {
 const [cita, setCita] = useState(Citas[getNumber(Citas.length)]);

  const background = colors[getNumber(colors.length)];

  const handleCita = () => {
    const index = getNumber(Citas.length);
    setCita(Citas[index]);
  };
  
  document.body.style = `background: ${background}`;
  
    return (
        <div className='Box'>
            
            <p className='cita' style={{color:background}}> <span>"</span> {cita.quote}</p>
            <h5 style={{color:background}}>Autor: {cita.author}</h5>
            <div className='container'>
            <button onClick={handleCita} className='randoomButton' style={{'background-color':background}} > + </button>
            </div>
            
        </div>
    );

};
const getNumber = (max) => Math.floor(Math.random() * max);

export default Box;