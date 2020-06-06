import * as React from 'react';
import './style.css';

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard">
        <div className="bodyWrapper">
          <div
            className={'contentWrapper'}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;