import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route,Routes } from 'react-router-dom';
import { Menu } from './Menu';
import { Home } from './Home';
import { C1 } from './Ser';
import { About } from './About';
import { H1 } from './Cont';
function ERR()
{
    return(
        <>
            Oops! The page does not exist
        </>
    )
}
function R1()
{
    return(

    <>
    <Menu></Menu>
    <Routes>
        <Route exact path='/Home' element={<Home></Home>}></Route>
        <Route exact path='/Service' element={<C1></C1>}></Route>
        <Route exact path='/About' element={<About></About>}></Route>
        <Route exact path='/Contact' element={<H1></H1>}></Route>

        <Route path='*' element={<ERR></ERR>}></Route>
    </Routes>
    </>
    )
}

export {R1};