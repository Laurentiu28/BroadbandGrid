import React from 'react';
import PropTypes from 'prop-types';


export default class FiltersPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter-panel">
                <ul>
                    <li>
                        <input type="checkbox" defaultChecked onChange={this.props.handleBroadbandChange} />
                        <lable>Broadband</lable>
                    </li>
                    <li>
                        <input type="checkbox" onChange={this.props.handleTVChange} />
                        <lable>TV</lable>
                    </li>
                    <li>
                        <input type="checkbox" onChange={this.props.handleMobileChange} />
                        <lable>Mobile</lable>
                    </li>
                </ul>
                <div style={{ marginLeft: '5px' }}>
                    <label>Speed</label><br />
                    <select onChange={this.props.handleSpeedChange}>
                        <option value="any" defaultChecked>Any</option>
                        <option value="52">52 MB</option>
                        <option value="17">17 MB</option>
                    </select>
                </div>
            </div>
        );
    }
}

FiltersPanel.propTypes = {
    style: PropTypes.object,
    handleBroadbandChange: PropTypes.func,
    handleMobileChange: PropTypes.func,
    handleTVChange: PropTypes.func,
    handleSpeedChange: PropTypes.func,
}