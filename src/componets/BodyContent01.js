import React from 'react';
import Card from '../cp01/Card'


function BodyContent01() {
    return(
        <div> 
            <div className='bodyContent'>
                <div className='bodyPage'>
                    <div className='header01'>
                    <h1>Movie Crew</h1>
                    <div className='headerDescription'>
                        <h3>Crew Presentation</h3>
                        <p> A résumé or resume is a document created and used by a person to present their background, skills, and accomplishments. Résumés can be used for a variety of reasons, but most often they are used to secure new employment. 
                            </p>
                    </div>
                    </div>
                    <div className='body01'>
                        
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                         
                

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyContent01;