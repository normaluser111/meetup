import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/Page2" component={Page2} />
            <Route path="/Page3" component={Page3} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
