import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';


import BodyContent from './componets/BodyContent'

import './App.css';
import MasterHeader from './componets/MasterHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <MasterHeader />
        <Switch>
        <Route exact path='/'>
         <BodyContent className=''/> 
        </Route>
        </Switch>
      </Router>








    </div>
  );
}

export default App;
