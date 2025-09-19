import React from 'react'
import "../styles/NavBar.css"
import football from '../assets/imgs/football.svg'
import house from '../assets/imgs/house.svg'
import shirt from '../assets/imgs/shirt.svg'
import people from '../assets/imgs/people.svg'
import gear from '../assets/imgs/gear.svg'



function NavBar() {
  return (
    <div className='mainContainer'>
        <div className='navTop'> 
            <img src={football} alt="Football" width="70" height="70"></img>
            <p>NFL Dashboard</p>
        </div>
        <div className='navBottom' >
            <div className='nav-1'>
                <img src={house} alt="Football" width="36" height="36"></img>
                <p>Home</p>
            </div>
            <div className='nav-2'>
                <img src={shirt} alt="Football" width="36" height="36"></img>
                <p>Teams</p>
            </div>
            <div className='nav-3'>
                <img src={people} alt="Football" width="36" height="36"></img>
                <p>Players</p>
            </div>
            <div className='nav-4'>
                <img src={gear} alt="Football" width="36" height="36"></img>
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar