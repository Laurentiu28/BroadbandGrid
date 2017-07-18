import React from 'react';
import applyFilters from '../../Filters/applyFilters';
import PropTypes from 'prop-types';
import FiltersPanel from '../shared-components/filtersPanel-component.jsx'
export default class BroadbandGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        Broadband: this.props.filters.Broadband,
        TV: this.props.filters.TV,
        Mobile: this.props.filters.Mobile,
        Speed: this.props.filters.Speed
      }
    };

    this.handleBroadbandChange = this.handleBroadbandChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleTVChange = this.handleTVChange.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
  }
  _filteredDeals(deals, filters) {
    return deals.filter(deal => applyFilters(deal, filters));
  }

  handleBroadbandChange() {
    this.setState(previous => ({
      filters: {
        Broadband: !previous.filters.Broadband,
        TV: previous.filters.TV,
        Mobile: previous.filters.Mobile,
        Speed: previous.filters.Speed
      }
    }));
  }

  handleTVChange() {
    this.setState(previous => ({
      filters: {
        Broadband: previous.filters.Broadband,
        TV: !previous.filters.TV,
        Mobile: previous.filters.Mobile,
        Speed: previous.filters.Speed
      }
    }));
  }

  handleMobileChange() {
    this.setState(previous => ({
      filters: {
        Broadband: previous.filters.Broadband,
        TV: previous.filters.TV,
        Mobile: !previous.filters.Mobile,
        Speed: previous.filters.Speed
      }
    }));
  }

  handleSpeedChange(event) {
    var value = event.target.value;
    this.setState(previous => ({
      filters: {
        Broadband: previous.filters.Broadband,
        TV: previous.filters.TV,
        Mobile: previous.filters.Mobile,
        Speed: value
      }
    }));
  }

  render() {
    let dealsRows = this._filteredDeals(this.props.deals, this.state.filters).map((deal) =>
      <tr key={deal.id}>
        <td style={{ maxWidth: '250px' }} >{deal.title}</td>
        <td>{deal.contractLength + ' months'}</td>
        <td>
          <span>{deal.speed.label} MB</span><br />
          <span>{deal.usage.label}</span>
        </td>
        <td>
          <img src={deal.offer.smallLogo} title={deal.offer.title} alt={deal.offer.title} />
        </td>
        <td>
          {deal.productTypes.includes('TV') ?
            deal.popularChannels.map(channel =>
              <div key={channel.name}>
                <img src={channel.logo} title={channel.name} alt={channel.name} />
              </div>
            )
            : (
              <span>N/A</span>
            )}
        </td>
        <td>
          {deal.productTypes.includes('Mobile') ?
            (<div>
              Data: {deal.mobile.data.label}<br />
              Minuites: {deal.mobile.minutes.label}<br />
              Text: {deal.mobile.texts.label}<br />
              Connection: {deal.mobile.connectionType.label}
            </div>)
            : (<span>N/A</span>)
          }
        </td>
        <td>£{deal.prices[0].totalContractCost}</td>
      </tr>
    );

    return (
      <div style={{ display: 'flex', height: 'calc(100% - 100px)', marginLeft: '100px' }}>
        <FiltersPanel style={{flexBasis: '175px', flexShrink: '0', backgroundColor: '#dedede'}}  
                      handleBroadbandChange={this.handleBroadbandChange} 
                      handleMobileChange = {this.handleMobileChange} 
                      handleSpeedChange = {this.handleSpeedChange}
                      handleTVChange = {this.handleTVChange} />

        <div style={{ flexGrow: '1' }}>
          <table id="grid-deals" style={{ width: '100%' }}>
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
      </div>
    );
  }
}

BroadbandGrid.propTypes = {
  deals: PropTypes.array,
  filters: PropTypes.shape({
    Broadband: PropTypes.bool,
    TV: PropTypes.bool,
    Mobile: PropTypes.bool,
    Speed: PropTypes.string
  })
}