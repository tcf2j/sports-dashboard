import React from 'react'
import "../styles/Dashboard.css"
import Standings from "../components/Standings.jsx"

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='col-1'>
        <div className='standingsItem'>
          <h2>Standings</h2>
          <Standings />
        </div>
        <div className='topPlayersItem'>
          <h2>Top Players</h2>
          <p>Top Players Cards</p>
        </div>
      </div>
      <div className='col-2'>
        <div className='recentGamesItem'>
          <h2> Recent Games</h2>
          <p> Games Chart</p>
        </div>
        <div className='teamChart'>
          <p>Team Chart</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard