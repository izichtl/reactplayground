import React from 'react';

import { Link } from 'react-router-dom'



function BodyContent() {
    return(
        <div> 
            <div className='bodyContent'>
                <div className='bodyPage00'>
                    <h1 className='bodyPageh1' >Space to host some React pages</h1>
                    <p>Index</p>
                    <ul >
                        <Link 
                            to='/01'>
                        <li>Movie Crew</li></Link>
                        <Link 
                            to='/02'>
                        <li>404 Not Found</li></Link> 
                        <Link 
                            to='/03'>
                        <li>Under Constrution</li></Link> 
                        <Link 
                            to='/04'>
                        <li>Buttons</li></Link> 
                        
                        
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BodyContent;