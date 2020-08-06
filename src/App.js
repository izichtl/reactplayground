import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';
import MasterHeader from './componets/MasterHeader'
import BodyContent from './componets/BodyContent'
import BodyContent01 from './componets/BodyContent01'
import NotFound from './componets/NotFound'
import UnderConstrution from './componets/UnderConstrution'
import BodyContent03 from './componets/BodyContent03'
import QuestionSite from './componets/QuestionSite'
import Login from './componets/Login'

import './App.css';
import './css/c01.css';
import './css/c03.css';
import './css/NotFound.css';
import './css/UnderConstrution.css'
import './css/QuestionSite.css'
import './css/Login.css'


function App() {
  return (
    <div className="App">
      <Router>
        <MasterHeader />
        <Switch >
        <Route exact path='/'>
         <BodyContent className='b'/> 
        </Route>
        <Route exact path='/01'>
         <BodyContent01 className='b'/> 
        </Route>
        <Route exact path='/02'>
         <NotFound className='b'/> 
        </Route>
        <Route exact path='/03'>
         <UnderConstrution className='b'/> 
        </Route>
        <Route exact path='/04'>
         <BodyContent03 className='b'/> 
        </Route>
        <Route exact path='/05'>
         <QuestionSite className='b'/> 
        </Route>
        <Route exact path='/06'>
         <Login className='b'/> 
        </Route>
        </Switch>
      </Router>








    </div>
  );
}

export default App;
