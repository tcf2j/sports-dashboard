import React from 'react'
import "../styles/GamesChart.css"
import chiefsLogo from '../assets/imgs/gamesChartImgs/kansas-city-chiefs-logo.png'
import bucLogo from '../assets/imgs/gamesChartImgs/tampa-bay-buccaneers-logo.png'
import laLogo from '../assets/imgs/gamesChartImgs/la-rams-logo-png-transparent.png'
import atlLogo from '../assets/imgs/gamesChartImgs/atlanta-falcons-logo.png'


function GamesChart() {
  return (
    <div className='gamesChart-container'>
        <div className='gamesChart-top'>
            <div className='gamesChart-topleft'>
                <div className='gamesChart-c1'>
                    <div className='gameCardInfo'>
                        <img src={chiefsLogo} alt="Kansas City Chiefs" width={70} height={70} />
                        <p>CHI</p>
                    </div>
                    <p>26</p>
                </div>
                <div className='gamesChart-c2'>
                    <div className='gameCardInfo'>
                        <img src={bucLogo} alt="Tampa Bay Buccaneers" width={70} height={70} />
                        <p>BUC</p>
                    </div>
                    <p>30</p>
                </div>
            </div>
            <div className='gamesChart-topleft'>
                <div className='gamesChart-c1'>
                    <div className='gameCardInfo'>
                        <img src={laLogo} alt="LA Rams" width={70} height={70} />
                        <p>LAR</p>
                    </div>
                    <p>17</p>
                </div>
                <div className='gamesChart-c2'>
                    <div className='gameCardInfo'>
                        <img src={atlLogo} alt="Atlanta Falcons" width={70} height={70} />
                        <p>ATL</p>
                    </div>
                    <p>14</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default GamesChart