import * as React from 'react';
import './style.css';
import SelectComponent from 'Components/SelectComponent';
import SingleHouse from 'Components/SingleHouse';
import { Icon } from 'react-fa';

const houseData = require('Data/houseData.json');

class SearchForm extends React.Component<{}> {
  constructor() {
    super();
    this.state = {
      resultTab: 'list'
    };
  }
 resultList = () => {
    return (
      <div className="resultsList">
        <div className="row">
          {houseData.map((data:any, index:any) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" key={index}>
                <SingleHouse data={data} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="searchForm">
        <div className="filterBox">
          <div className="row form-group">
            <div className="col-xs-12 col-sm-8 col-md-6 yearOfBirth">
              <h4>Prototype Type</h4>
              <div className="selectItem">
                <SelectComponent listItem={['All', 'Rent', 'Sale']} />
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label>Bedrooms</label>
                <div className="volume">
                  <a href="#" className="btn btn-gray btn-round-left">
                    <Icon name="angle-left" />
                  </a>
                  <input type="text" className="form-control" readOnly={true} value="1" />
                  <a href="#" className="btn btn-gray btn-round-right">
                    <Icon name="angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 formItem">
              <div className="formField">
                <label>Bathrooms</label>
                <div className="volume">
                  <a href="#" className="btn btn-gray btn-round-left"><Icon name="angle-left" /></a>
                  <input type="text" className="form-control" readOnly={true} value="1" />
                  <a href="#" className="btn btn-gray btn-round-right"><Icon name="angle-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resultTable">
          <div className="resultBody">
            {this.resultList()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;