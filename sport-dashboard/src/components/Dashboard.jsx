import React from 'react'
import "../styles/Dashboard.css"
import Standings from "./Standings.jsx"
import GamesChart from './GamesChart.jsx'
import TeamChart from './TeamChart.jsx'

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='upperDash'>
        <div className='col-1'>
          <div className='standingsSection'>
            <h2>Standings</h2>
            <Standings />
          </div>
        </div>
        <div className='col-2'>
          <div className='recentGamesSection'>
            <h2> Recent Games</h2>
            <GamesChart />
          </div>
          <div className='teamChart'>
            <TeamChart />
          </div>
        </div>
      </div>
      <div className='bottomDash'>
        <div bottomRow>
          <div className='topPlayersSection'>
            <h2>Top Players</h2>
            <p>Top Players Cards</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard