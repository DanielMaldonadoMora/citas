import React, { Component } from 'react';
import Box from './Box';

const RandoomButton =({
    fondo,
    changeCita
}) =>{
    
        return (
            <div >
                <button onClick={changeCita, console.log(fondo)} className='randoomButton' > Next </button>
            </div>
        );
    
}

export default RandoomButton;