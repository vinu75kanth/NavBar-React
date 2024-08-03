import React, { useState } from 'react'
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [theme,setTheme] = useState('light');
  const [icon,setIcon] = useState(faMoon);
  function handleChange(e){
    console.log(e);
    if(theme==='light'){
      document.body.style.backgroundColor='hsla(0, 0%, 0%, 0.747)';
      document.querySelector('.container').style.backgroundColor='black';
      setIcon(faSun);
      document.getElementById("btnn").style.color="white";
    }
    else{
      document.body.style.backgroundColor='hsla(187, 100%, 54%, 0.137)';
      document.querySelector('.container').style.backgroundColor='hsl(192, 82%, 38%)';
      setIcon(faMoon);
      document.getElementById("btnn").style.color="black";
    }
    setTheme((theme==='light')? 'dark':'light');
  };
  return (
    <div className='container'>
      <h1><span>V</span>inu <span>K</span>anth</h1>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>
      <div className='search-box'>
        <input type="text" placeholder='Search'></input>
        <FontAwesomeIcon id="search" className="icon" icon={faMagnifyingGlass} />
      </div>
      <button id="btnn"><FontAwesomeIcon icon={icon} onClick={(e)=>handleChange(e)}/></button>
    </div>
  )
}
export default Navbar;