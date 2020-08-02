import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom';
import MasterHeader from './componets/MasterHeader'
import BodyContent from './componets/BodyContent'
import BodyContent01 from './componets/BodyContent01'
import BodyContent02 from './componets/BodyContent02'
import BodyContent03 from './componets/BodyContent03'
import './App.css';
import './css/c01.css';
import './css/NotFound.css';


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
         <BodyContent02 className='b'/> 
        </Route>
        <Route exact path='/03'>
         <BodyContent03 className='b'/> 
        </Route>
        </Switch>
      </Router>








    </div>
  );
}

export default App;
