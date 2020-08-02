import React from 'react';
import NotFoundSVG from '../svg/NotFoundSVG'


function BodyContent02() {
    return(
        <div> 
            <div className='bodyContent'>
            <div className='notfound'>
                <h3>404 ERROR | the file has been taken</h3>
                <NotFoundSVG/>
                <h3>you want to believe</h3>
             </div>
            </div>
        </div>
    )
}

export default BodyContent02;