import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lo1 from './LO1.jpg';
import i2 from './App1.jpg';
import i3 from './I2.jpg';
import i4 from './i3.jpg';
import i5 from './i4.jpg';
import i6 from './LO.jpg';
function C2(p)
{
    return(
        <>
            <div class="card" >
            <img src={p.i} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{p.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button>Check now</button>
  </div>
</div>
        </>
    )
}

function C1()
{
    return(
        <>
        <C2 title="WEB Development" i={Lo1}></C2>
        <C2 title="APP Development" i={i2}></C2>
        <C2 title="Flutter Development" i={i3}></C2>
        <C2 title="ASM Development" i={i4}></C2>
        <C2 title="Swift Development" i={i5}></C2>
        <C2 title="Hardware Development" i={i6}></C2>
        </>
    )
}

export {C1};