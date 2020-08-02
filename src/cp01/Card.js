import React from 'react'


function Card(){
    return(
        <div>
            <div className='cardContent01'>


                <div className='cardBody01'>
                    <div className='imgContent01'>
                        <img alt='crewmembers'src='https://images.unsplash.com/photo-1486074051793-e41332bf18fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                        <p>Cindy Bitter</p>
                    </div>
                    <div className='textContent01'>
                    <p className='memberName'>Coach</p>
                    </div>
                </div>
                <div className='cardBody02'>
                    <div className='imgContent01'>
                        <img alt='crewmembers' src='https://images.unsplash.com/photo-1541711589646-e1f6cb5a78d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                        <p>Loren Jack</p>
                    </div>
                    <div className='textContent01'>
                    <p className='memberName'>Director</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;