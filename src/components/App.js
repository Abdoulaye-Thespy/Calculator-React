import React from 'react';
import {
  Route, BrowserRouter as Router, Switch, Link,
} from 'react-router-dom';
import Calculator from './Calculator';
import Home from './home';
import Quote from './quotes';

export default function App() {
  return (
    <Router>
      <div className="nav">
        <h1> MATH MAGICIANS</h1>
        <div>
          <Link to="/" className="el">Home </Link>
          <Link to="/quote" className="el">Quotes </Link>
          <Link to="/calculator" className="el">Calculator </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/calculator" component={Calculator} />
      </Switch>
    </Router>
  );
}
