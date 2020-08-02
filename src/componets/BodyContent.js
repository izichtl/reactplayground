import React from 'react';

import { Link } from 'react-router-dom'



function BodyContent() {
    return(
        <div> 
            <div className='bodyContent'>
                <div className='bodyPage00'>
                    <h1 className='bodyPageh1' >This is Home</h1>
                    <p>This is a teste ground for some projects and studys</p>
                    <ul >
                        <Link 
                            to='/01'>
                        <li>Movie Crew</li></Link>
                        <Link 
                            to='/02'>
                        <li>404 Not Found</li></Link> 
                        <Link 
                            to='/03'>
                        <li>Buttons</li></Link> 
                        
                        
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BodyContent;