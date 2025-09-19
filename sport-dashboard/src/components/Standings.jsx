import React from 'react'
import { standings } from "../dataFiles/standingsData.js"
import "../styles/Standings.css"

function Standings() {
    const firstTeam = standings[0];
    const secondTeam = standings[1];
    const thirdTeam = standings[2];
    const fourthTeam = standings[3];

  return (
    <div>
        <div className='standings-container'>
            <div className='standings-header'>
                <div className='standingsHeader-left'>
                    <p>Rank</p>
                    <p>Team</p>
                </div>
                <div className='standingsHeader-right'>
                    <p>W</p>
                    <p>L</p>
                    <p>T</p>
                    <p>PCT</p>
                    <p>DIV</p>
                </div>
            </div>
            <div className='nfcEast-section'>
                <p>NFC</p>
                <p>NFC East</p>
            </div>
            <div className='standing-01'>
                <div className='s01-left'>
                    <p>{firstTeam.rank}</p>
                    <p>{firstTeam.team}</p>
                </div>
                <div className='s01-right'>
                    <p>{firstTeam.wins}</p>
                    <p>{firstTeam.losses}</p>
                    <p>{firstTeam.ties}</p>
                    <p>{firstTeam.pct}</p>
                    <p>{firstTeam.div}</p>
                </div>
            </div>
            <div className='standing-02'>
                <div className='s02-left'>
                    <p>{secondTeam.rank}</p>
                    <p>{secondTeam.team}</p>
                </div>
                <div className='s02-right'>
                    <p>{secondTeam.wins}</p>
                    <p>{secondTeam.losses}</p>
                    <p>{secondTeam.ties}</p>
                    <p>{secondTeam.pct}</p>
                    <p>{secondTeam.div}</p>
                </div>
            </div>
            <div className='standing-03'>
                <div className='s03-left'>
                    <p>{thirdTeam.rank}</p>
                    <p>{thirdTeam.team}</p>
                </div>
                <div className='s03-right'>
                    <p>{thirdTeam.wins}</p>
                    <p>{thirdTeam.losses}</p>
                    <p>{thirdTeam.ties}</p>
                    <p>{thirdTeam.pct}</p>
                    <p>{thirdTeam.div}</p>
                </div>
            </div>
            <div className='standing-04'>
                <div className='s04-left'>
                    <p>{fourthTeam.rank}</p>
                    <p>{fourthTeam.team}</p>
                </div>
                <div className='s04-right'>
                    <p>{fourthTeam.wins}</p>
                    <p>{fourthTeam.losses}</p>
                    <p>{fourthTeam.ties}</p>
                    <p>{fourthTeam.pct}</p>
                    <p>{fourthTeam.div}</p>
                </div>
            </div>
            <div className='nfcNorth-section'>
                <p>NFC</p>
                <p>NFC North</p>
            </div>
            <div className='standing-11'>
                <div className='s01-left'>
                    <p>{firstTeam.rank}</p>
                    <p>{firstTeam.team}</p>
                </div>
                <div className='s11-right'>
                    <p>{firstTeam.wins}</p>
                    <p>{firstTeam.losses}</p>
                    <p>{firstTeam.ties}</p>
                    <p>{firstTeam.pct}</p>
                    <p>{firstTeam.div}</p>
                </div>
            </div>
            <div className='standing-12'>
                <div className='s12-left'>
                    <p>{secondTeam.rank}</p>
                    <p>{secondTeam.team}</p>
                </div>
                <div className='s12-right'>
                    <p>{secondTeam.wins}</p>
                    <p>{secondTeam.losses}</p>
                    <p>{secondTeam.ties}</p>
                    <p>{secondTeam.pct}</p>
                    <p>{secondTeam.div}</p>
                </div>
            </div>
            <div className='standing-13'>
                <div className='s03-left'>
                    <p>{thirdTeam.rank}</p>
                    <p>{thirdTeam.team}</p>
                </div>
                <div className='s13-right'>
                    <p>{thirdTeam.wins}</p>
                    <p>{thirdTeam.losses}</p>
                    <p>{thirdTeam.ties}</p>
                    <p>{thirdTeam.pct}</p>
                    <p>{thirdTeam.div}</p>
                </div>
            </div>
            <div className='standing-14'>
                <div className='s04-left'>
                    <p>{fourthTeam.rank}</p>
                    <p>{fourthTeam.team}</p>
                </div>
                <div className='s14-right'>
                    <p>{fourthTeam.wins}</p>
                    <p>{fourthTeam.losses}</p>
                    <p>{fourthTeam.ties}</p>
                    <p>{fourthTeam.pct}</p>
                    <p>{fourthTeam.div}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Standings