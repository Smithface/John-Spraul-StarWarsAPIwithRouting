import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Characters from './Characters';
import IndividualInfo from './IndividualInfo'

const App = () => (
  <Router>
    <div>
      <div className="Characters">
        <h1 className="Header">React Wars</h1>
        <Route path = "/" component={Characters} exact />
        <Route path = "/character/:id" component={IndividualInfo} />
      </div>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
