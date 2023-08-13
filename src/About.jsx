import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lo from './LO.jpg';
import { NavLink } from 'react-router-dom';
import i2 from "./I2.jpg";
function About()
{
    return(
        <>
            <div className='t1'>
                Welcome To About Page
            </div>
            <div className='t2'>
                Mustafa Technical
            </div>
            
            <div className='t33'>
            <NavLink to="/Contact">
                Contact Us
            </NavLink>
            </div>
            <img src={i2} className='t4'></img>
        </>
    )
}

export {About};