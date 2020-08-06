import React from 'react'
import Question from '../componets/Question'
import Question02 from '../componets/Question02'
import {
    BrowserRouter as Router, 
    Switch, 
    Route,
  } from 'react-router-dom';

const QuestionSite = () => {
    return( 
        <div> 
            <div className='questionSite'>
                 QuestionSite Here

                <div className='questionHolder'>
                QuestionHolder Here
                    <div className='questionBody'>
                    O Seu progresso é: 1/1
                        <Router>
                            <Switch>




                            <Route exact path='/05'>
                            <Question /> 
                            </Route>
                            <Route exact path='/05/02'>
                            <Question02 /> 
                            </Route>
                                
                        




                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default QuestionSite;