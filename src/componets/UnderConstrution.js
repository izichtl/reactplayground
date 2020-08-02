import React from 'react';
import UnderConstrutionSVG from '../svg/UnderConstrutionSVG.js'


function UnderConstrution() {
    return(
        <div> 
            <div className='bodyContent'>
            <div className='underConstrution'>
                <h3>Work in progress</h3>
                 <UnderConstrutionSVG/>
                <h3>Come back later :) </h3>
             </div>
            </div>
        </div>
    )
}

export default UnderConstrution;