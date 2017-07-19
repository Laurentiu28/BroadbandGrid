import React from 'react';
import PropTypes from 'prop-types';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var dealsRows = this.props.deals.map((deal) =>
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
            </tr>);
        return (
            <div className="grid" style={{ flexGrow: '1' }}>
                <table className="grid-deals" style={{ width: '100%' }}>
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
        );
    }
}

Grid.propTypes = {
  deals: PropTypes.array.isRequired,  
}