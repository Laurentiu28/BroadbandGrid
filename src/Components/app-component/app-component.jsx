import React from 'react';
import Broadband from '../broadband/broadband-component.jsx';

var service = function () {
  return {
    fetchDeals: () => {
      return fetch('/assets/deals.json')
        .then(res => res.json())
        .then(rest => rest.deals)
    }
  }

}();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 'deals': [] };
      service.fetchDeals().then(deals => {
      this.setState({ 'deals': deals })
    })    
  }  

  render() {
    return (
      <div style={{ height: '100%' }}>
        <header style={{ backgroundColor: '#dedede', height: '80px' }}>
          <a href="/" id="logo" style={{ marginLeft: '100px' }}></a>
        </header>
        <Broadband deals={this.state.deals} 
            filters={{ Broadband: true, TV: false, Mobile: false, Speed: 'any' }} />
      </div>
    );
  }
}