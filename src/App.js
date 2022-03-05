import Form from './Form'
import User from './User'
import Navber from './Navbar'
import Verified from './Verified'
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  

  return (
    <Router>
      <div className="app">
        <Navber/>

        <div className="content">
            <Switch>
              <Route path="/" exact>
                <Form/>
              </Route>
              <Route path="/user" exact>
                <User/>
              </Route>
              <Route path="/verified" exact>
                <Verified/>
              </Route>
            </Switch>

        </div>
        
      </div>
    </Router>
  );
}

export default App;
