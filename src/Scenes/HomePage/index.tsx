import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import ListProperty from './Components/ListProperty';

class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    return (
      <div className="homePage">
        <div className="bodyWrapper">
          <ListProperty />
        </div>
      </div>
    );
  }
}

export default HomePage;