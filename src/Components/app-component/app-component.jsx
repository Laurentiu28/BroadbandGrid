import React from 'react';
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
    let dealsRows = this.state.deals.map((deal) =>
      <tr>
        <td style={{maxWidth:'250px'}} >{deal.title}</td>
        <td>{deal.contractLength + ' months'}</td>
        <td>
          <span>{deal.speed.label}</span><br />
          <span>{deal.usage.label}</span>
        </td>
        <td>
          <img src={deal.offer.smallLogo} title={deal.offer.title} alt={deal.offer.title} />
        </td>
        <td>
          {deal.tvProduct ?
            deal.popularChannels.map(channel =>
              <div><img src={channel.logo} title={channel.name} alt={channel.name} /></div>
            )
            : (
              <span>N/A</span>
            )}
        </td>
        <td>
          {deal.mobile ?
            (<div>
              Data: {deal.mobile.data.label}<br/>
              Minuites: {deal.mobile.minutes.label}<br/>
              Text: {deal.mobile.texts.label}<br/>
              Connection: {deal.mobile.connectionType.label}
            </div>) 
            : (<span>N/A</span>)
          }
        </td>
        <td>£{deal.prices[0].totalContractCost}</td>
      </tr>
    );
    return (
      <div style={{ height: '100%' }}>
        <header style={{ backgroundColor: '#dedede', height: '80px' }}>
          <a href="/" id="logo" style={{ marginLeft: '100px' }}></a>
        </header>
        <main style={{ display: 'flex', height: 'calc(100% - 100px)', margin: '0 100px' }}>
          <div style={{height: '100%', width: '175px', backgroundColor: '#dedede', height: '100%' }}>
            <ul>
              <li><input type="checkbox" /><lable>Broadband</lable></li>
              <li><input type="checkbox" /><lable>TV</lable></li>
              <li><input type="checkbox" /><lable>Mobile</lable></li>
            </ul>
            <div style={{ marginLeft: '5px' }}>
              <label>Speed</label><br />
              <select>
                <option value="Any" defaultChecked>Any</option>
              </select>
            </div>
          </div>
          <div>
            <table id="grid-deals">
              <thead>
                <tr>
                  <th>About</th>
                  <th>Contract Length</th>
                  <th>Speed/Usage</th>
                  <th>Offer</th>
                  <th>TV</th>
                  <th>Mobile</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {dealsRows}
              </tbody>
            </table>
          </div>
        </main>
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