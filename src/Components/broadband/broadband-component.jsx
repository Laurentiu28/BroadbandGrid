import React from 'react';
import $ from 'jquery'; 
import applyFilters from '../../Filters/applyFilters';
import PropTypes from 'prop-types';
import FiltersPanel from '../shared-components/filtersPanel-component.jsx';
import Grid from '../grid-component/grid-component.jsx';
import MenuIcon from '../shared-components/menuIcon-component.jsx';
import List from '../list-component/list-component.jsx';

export default class Broadband extends React.Component {
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
  _getfilteredDeals(deals, filters) {
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

  handleMenuIconClick(event){
    $('.filter-panel').toggle();
  }

  render() {
    let filteredDeals = this._getfilteredDeals(this.props.deals, this.state.filters);

    return (
      <div id="#main" style={{ display: 'flex', height: 'calc(100% - 100px)', marginLeft: '100px' }}>
        <FiltersPanel style={{}}  
                      handleBroadbandChange={this.handleBroadbandChange} 
                      handleMobileChange = {this.handleMobileChange} 
                      handleSpeedChange = {this.handleSpeedChange}
                      handleTVChange = {this.handleTVChange} />

        <Grid deals={filteredDeals} />
        <MenuIcon handleClick={this.handleMenuIconClick} />
        <List />
      </div>
    );
  }
}

Broadband.propTypes = {
  deals: PropTypes.array,
  filters: PropTypes.shape({
    Broadband: PropTypes.bool,
    TV: PropTypes.bool,
    Mobile: PropTypes.bool,
    Speed: PropTypes.string
  })
}