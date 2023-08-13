import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lo from './LO.jpg';
function Home()
{
    return(
        <>
            <div className='t1'>
                Grow Your Own Business With
            </div>
            <div className='t2'>
                Mustafa Tehnical
            </div>
            <div className='t3'>Get Started</div>
            <img src={Lo} className='t4'></img>
        </>
    )
}

export {Home};