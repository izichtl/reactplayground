import React from 'react';

import { Link } from 'react-router-dom'



function BodyContent() {
    return(
        <div> 
            <div className='bodyContent'>
                <div className='bodyPage00'>
                    <h1 className='bodyPageh1' >Space to host some React pages, componets and tests</h1>
                    <p>Index</p>
                    <ul >
                        <Link 
                            className='indexLink'
                            to='/01'>
                        <li>Team Page</li></Link>
                        <Link
                            className='indexLink' 
                            to='/02'>
                        <li>404 Not Found</li></Link> 
                        <Link
                            className='indexLink'
                            to='/03'>
                        <li>Under Constrution</li></Link> 
                        <Link
                            className='indexLink'
                            to='/04'>
                        <li>Buttons</li></Link> 
                        <Link
                            className='indexLink'
                            to='/05'>
                        <li>QuestionSite - Under Constrution</li></Link> 
                        <Link
                            className='indexLink'
                            to='/06'>
                        <li>Login Page</li></Link> 
                        
                        
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BodyContent;