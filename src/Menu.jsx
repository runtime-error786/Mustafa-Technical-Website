import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavLink } from 'react-router-dom';

function Menu()
{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" id='g1'>
  <div class="container-fluid M1">
    <a class="navbar-brand" href="#">
        <NavLink to="/Home" style={{color:'blue',fontSize:"xx-larger"}}>Mustafa Technical</NavLink>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page">        <NavLink to="/Home" style={{color:'blue',fontSize:"xx-larger"}}>Home</NavLink>
</a>
        <a class="nav-link" href="#">        <NavLink to="/Service" style={{color:'blue',fontSize:"xx-larger"}}>Service</NavLink>
</a>
        <a class="nav-link" href="#">        <NavLink to="/About" style={{color:'blue',fontSize:"xx-larger"}}>About</NavLink>
</a>
        <a class="nav-link" >        <NavLink to="/Contact" style={{color:'blue',fontSize:"xx-larger"}}>Contact</NavLink>
</a>
      </div>
    </div>
  </div>
</nav>
</>
    )
}

export {Menu};