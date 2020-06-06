import * as React from 'react';
import './Bootstrap/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from 'Scenes/SearchPage';
import MyhousePage from 'Scenes/MyhousePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/" component={SearchPage} />
          <Route exact={true} path="/property/:id?" component={MyhousePage} />
        </div>
      </Router>
    );
  }
}

export default App;
