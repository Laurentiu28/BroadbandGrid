import React from 'react';
import BroadbandGrid from '../broadbandGrid/broadbandGrid-component.jsx';

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
        <BroadbandGrid deals={this.state.deals} 
            filters={{ Broadband: true, TV: false, Mobile: false, Speed: 'any' }} />
        {/* <svg
          height="32px"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg> */}

        {/* {JSON.stringify(this.state.deals)} */}
      </div>
    );
  }
}