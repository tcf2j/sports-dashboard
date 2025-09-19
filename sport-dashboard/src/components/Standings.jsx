import React from 'react'
import { standings } from "../dataFiles/standingsData.js"
import "../styles/Standings.css"

function Standings() {
    const topTeam = standings[0];

  return (
    <div>
        <div className='standings-container'>
            <div className='standings-header'>
                <div className='standings-left'>
                    <p>Rank</p>
                    <p>Team</p>
                </div>
                <div className='standings-right'>
                    <p>W</p>
                    <p>L</p>
                    <p>T</p>
                    <p>PCT</p>
                    <p>DIV</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Standings