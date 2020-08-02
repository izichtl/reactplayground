import React from 'react'
import { Link } from 'react-router-dom'

function MasterHeader () {
    return(
        <div className='masterHeader' >

                    
            <header className="App-header">
            
            <Link 
            to='/'
            className="App-link"
            ><p className="App-link">
                React Playground
            </p></Link>
            <Link 
            to='/'
            className="App-link">
            <a
                className="App-link"
                href="https://devchallenges.io/challenges"
                target="_blank"
                rel="noopener noreferrer"
            >
               Index
            </a></Link>
            </header>



        </div>
    )
}

export default MasterHeader;