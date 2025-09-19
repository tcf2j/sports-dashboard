import React from 'react'
import "../styles/TeamChart.css"
import washLogo from '../assets/imgs/gamesChartImgs/washington-commanders-logo-png-transparent.png'

function TeamChart() {
  return (
    <div>
        <div className='teamChart-container'>
            <div className='teamChart-info'>
                <img src={washLogo} alt="Tampa Bay Buccaneers" width={200} height={150} />
                <div className='teamChart-details'>
                    <div className='teamChart-title'>
                        <h3>Washington Commanders</h3>
                    </div>
                    <div className='teamChart-numbers'>
                        <p>10-5</p>
                        <p>1st East</p>
                    </div>
                </div>
            </div>
            <div className='teamChart-graph'>

            </div>
        </div>
    </div>
  )
}

export default TeamChart