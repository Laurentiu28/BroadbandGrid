import applyFilters from './applyFilters.js';

describe('ApplyFilter tests', () => {
    test('GIVEN deals WHEN filtering by Broadband THEN return the 3 broadband only deals', () => {
        let filters = { Broadband: true, TV: false, Mobile: false, Speed: 'any' };
        let result = mockDeals.deals.filter(deal => applyFilters(deal, filters));
        expect(result.length).toBe(3);
        result.forEach(deal => {
            expect(deal.productTypes).toContain('Broadband');
            expect(deal.productTypes).not.toContain('TV');
            expect(deal.productTypes).not.toContain('Mobile');
        });
    });

    test('GIVEN deals WHEN filtering by Broadband AND Tv THEN return the 2 deals for broadband and Tv only', () => {
        let filters = { Broadband: true, TV: true, Mobile: false, Speed: 'any' };
        let result = mockDeals.deals.filter(deal => applyFilters(deal, filters));
        expect(result.length).toBe(2);
        result.forEach(deal => {
            expect(deal.productTypes).toContain('Broadband');
            expect(deal.productTypes).toContain('TV');
            expect(deal.productTypes).not.toContain('Mobile');
        });
    });

    test('GIVEN deals WHEN filtering by Broadband AND Mobile THEN return the single deal for broadband and Mobile only', () => {
        let filters = { Broadband: true, TV: false, Mobile: true, Speed: 'any' };
        let result = mockDeals.deals.filter(deal => applyFilters(deal, filters));
        expect(result.length).toBe(1);
        result.forEach(deal => {
            expect(deal.productTypes).toContain('Broadband');
            expect(deal.productTypes).not.toContain('TV');
            expect(deal.productTypes).toContain('Mobile');
        });
    });
    test('GIVEN deals WHEN filtering by Mobile, Broadband, TV selected AND Speed 5000MB THEN 0 results', () => {
        let filters = { Broadband: true, TV: true, Mobile: true, Speed: "5000" };
        let result = mockDeals.deals.filter(deal => applyFilters(deal, filters));
        expect(result.length).toBe(0);
    });

    test('GIVEN results WHEN filtering by Broadband AND Speed 52MB THEN return one deal only', () => {
        let filters = { Broadband: true, TV: false, Mobile: false, Speed: "52" };
        let result = mockDeals.deals.filter(deal => applyFilters(deal, filters));
        expect(result.length).toBe(1);
        result.forEach(deal => {
            expect(deal.productTypes).toContain('Broadband');
            expect(deal.productTypes).not.toContain('TV');
            expect(deal.productTypes).not.toContain('Mobile');
            expect(deal.speed.label).toBe("52");
        });
    });
});

//mock Data
var mockDeals = {
    "deals": [
        {
            "title": "Unlimited Broadband & Weekend Calls",
            "prices": [
                {
                    "periods": [
                        {
                            "months": 18,
                            "amount": 19.5
                        },
                        {
                            "months": null,
                            "amount": 28.5
                        }
                    ],
                    "firstYear": 241,
                    "totalContractCost": 358,
                    "upFrontCost": 7,
                    "upsell": null
                }
            ],
            "id": 4930,
            "contractLength": 18,
            "tvProduct": null,
            "standardChannels": null,
            "totalChannels": null,
            "hdChannels": null,
            "speed": {
                "label": "17",
                "sortValue": 17408
            },
            "uploadSpeed": {
                "label": "1",
                "sortValue": 1024
            },
            "usage": {
                "label": "Unlimited",
                "sortValue": 1000
            },
            "mobile": null,
            "offer": {
                "type": "None",
                "title": "£50 cancellation credit",
                "smallLogo": "https://bucket.cdndtl.co.uk/bc/ICONS_70x70/13102016ICONS/Icon-EE-50Cancellation.png",
                "expiresAt": "2018-04-05T05:30:00Z"
            },
            "provider": {
                "id": 48,
                "name": "EE",
                "logo": "https://bucket.cdndtl.co.uk/bc/providerlogos/ee_99.png"
            },
            "newLineCost": 30,
            "upfrontCosts": [
                {
                    "name": "Total",
                    "price": 7
                },
                {
                    "name": "Delivery",
                    "price": 7
                },
                {
                    "name": "Hardware",
                    "price": 0
                },
                {
                    "name": "Installation",
                    "price": 0
                },
                {
                    "name": "New Line",
                    "price": 30
                }
            ],
            "productTypes": [
                "Broadband",
                "Phone"
            ],
            "premiumFeatures": {

            },
            "popularChannels": [

            ]
        },
        {
            "title": "Total Entertainment + Unlimited Infinity 2 + Weekend Calls",
            "prices": [
                {
                    "selectedOptions": [

                    ],
                    "periods": [
                        {
                            "months": 12,
                            "amount": 67.99
                        }
                    ],
                    "firstYear": 825.87,
                    "totalContractCost": 825.87,
                    "upFrontCost": 9.99,
                    "upsell": null
                }
            ],
            "id": 4138,
            "contractLength": 12,
            "tvProduct": "Total entertainment",
            "standardChannels": {
                "label": "94",
                "sortValue": 94
            },
            "totalChannels": {
                "label": "139",
                "sortValue": 139
            },
            "hdChannels": {
                "label": "23",
                "sortValue": 23
            },
            "speed": {
                "label": "76",
                "sortValue": 77824
            },
            "uploadSpeed": {
                "label": "19",
                "sortValue": 19456
            },
            "usage": {
                "label": "Truly Unlimited",
                "sortValue": 1001
            },
            "mobile": null,
            "offer": {
                "type": "OnlineExclusive",
                "title": "£150 BT Reward Card - see BT's website for further details",
                "smallLogo": "https://bucket.cdndtl.co.uk/bc/ICONS_70x70/BT_150reward.png",
                "expiresAt": "2016-11-07T23:55:00Z"
            },
            "provider": {
                "id": 3,
                "name": "BT",
                "logo": "https://bucket.cdndtl.co.uk/bc/providerlogos/bt_99.png"
            },
            "newLineCost": 0,
            "upfrontCosts": [
                {
                    "name": "Total",
                    "price": 9.99
                },
                {
                    "name": "Delivery",
                    "price": 9.99
                },
                {
                    "name": "Hardware",
                    "price": 0
                },
                {
                    "name": "Installation",
                    "price": 0
                },
                {
                    "name": "New Line",
                    "price": 0
                }
            ],
            "productTypes": [
                "TV",
                "Phone",
                "Broadband"
            ],
            "premiumFeatures": {
                "BTSport": true,
                "ComedyCentral": true,
                "DiscoveryChannel": true,
                "CartoonNetwork": true,
                "DisneyChannel": true
            },
            "popularChannels": [
                {
                    "name": "BT Sport 1",
                    "channelCategory": "Sport",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/bt-sport-1.png"
                },
                {
                    "name": "Film4",
                    "channelCategory": "Movies",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/film4.png"
                },
                {
                    "name": "E4",
                    "channelCategory": "Entertainment",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/e4.png"
                },
                {
                    "name": "Dave",
                    "channelCategory": "Entertainment",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/dave.png"
                }
            ]
        },
        {
            "title": "Total Entertainment + Unlimited Infinity 2 + Weekend Calls",
            "prices": [
                {
                    "selectedOptions": [

                    ],
                    "periods": [
                        {
                            "months": 12,
                            "amount": 67.99
                        }
                    ],
                    "firstYear": 825.87,
                    "totalContractCost": 825.87,
                    "upFrontCost": 9.99,
                    "upsell": null
                }
            ],
            "id": 4158,
            "contractLength": 12,
            "tvProduct": "Total entertainment",
            "standardChannels": {
                "label": "94",
                "sortValue": 94
            },
            "totalChannels": {
                "label": "139",
                "sortValue": 139
            },
            "hdChannels": {
                "label": "23",
                "sortValue": 23
            },
            "speed": {
                "label": "76",
                "sortValue": 77824
            },
            "uploadSpeed": {
                "label": "19",
                "sortValue": 19456
            },
            "usage": {
                "label": "Truly Unlimited",
                "sortValue": 1001
            },
            "mobile": null,
            "offer": {
                "type": "OnlineExclusive",
                "title": "£150 BT Reward Card - see BT's website for further details",
                "smallLogo": "https://bucket.cdndtl.co.uk/bc/ICONS_70x70/BT_150reward.png",
                "expiresAt": "2016-11-07T23:55:00Z"
            },
            "provider": {
                "id": 3,
                "name": "BT",
                "logo": "https://bucket.cdndtl.co.uk/bc/providerlogos/bt_99.png"
            },
            "newLineCost": 0,
            "upfrontCosts": [
                {
                    "name": "Total",
                    "price": 9.99
                },
                {
                    "name": "Delivery",
                    "price": 9.99
                },
                {
                    "name": "Hardware",
                    "price": 0
                },
                {
                    "name": "Installation",
                    "price": 0
                },
                {
                    "name": "New Line",
                    "price": 0
                }
            ],
            "productTypes": [
                "TV",
                "Phone",
                "Broadband"
            ],
            "premiumFeatures": {
                "BTSport": true,
                "ComedyCentral": true,
                "DiscoveryChannel": true,
                "CartoonNetwork": true,
                "DisneyChannel": true
            },
            "popularChannels": [
                {
                    "name": "BT Sport 1",
                    "channelCategory": "Sport",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/bt-sport-1.png"
                },
                {
                    "name": "Film4",
                    "channelCategory": "Movies",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/film4.png"
                },
                {
                    "name": "E4",
                    "channelCategory": "Entertainment",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/e4.png"
                },
                {
                    "name": "Dave",
                    "channelCategory": "Entertainment",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/dave.png"
                }
            ]
        },
        {
            "title": "Entertainment Plus + Unlimited BT Infinity 1 + Weekend Calls + BT Mobile",
            "prices": [
                {
                    "selectedOptions": [

                    ],
                    "periods": [
                        {
                            "months": 12,
                            "amount": 44.99
                        }
                    ],
                    "firstYear": 599.87,
                    "totalContractCost": 599.87,
                    "upFrontCost": 59.99,
                    "upsell": null
                }
            ],
            "id": 4412,
            "contractLength": 12,
            "telephoneNumber": "0800 783 5390",
            "standardChannels": {
                "label": "86",
                "sortValue": 86
            },
            "totalChannels": {
                "label": "117",
                "sortValue": 117
            },
            "hdChannels": {
                "label": "9",
                "sortValue": 9
            },
            "speed": {
                "label": "52",
                "sortValue": 53248
            },
            "uploadSpeed": {
                "label": "9",
                "sortValue": 9728
            },
            "usage": {
                "label": "Truly Unlimited",
                "sortValue": 1001
            },
            "mobile": {
                "minutes": {
                    "label": "500",
                    "sortValue": 500
                },
                "data": {
                    "label": "2 GB",
                    "sortValue": 2
                },
                "texts": {
                    "label": "Unlimited texts",
                    "sortValue": 1000000
                },
                "connectionType": {
                    "label": "4G",
                    "sortValue": 4
                }
            },
            "offer": {
                "type": "OnlineExclusive",
                "title": "£150 BT Reward Card - see BT's website for further details",
                "smallLogo": "https://bucket.cdndtl.co.uk/bc/ICONS_70x70/BT_150reward.png",
                "expiresAt": "2016-11-07T23:55:00Z"
            },
            "provider": {
                "id": 3,
                "name": "BT",
                "logo": "https://bucket.cdndtl.co.uk/bc/providerlogos/bt_99.png"
            },
            "newLineCost": 0,
            "upfrontCosts": [
                {
                    "name": "Total",
                    "price": 59.99
                },
                {
                    "name": "Delivery",
                    "price": 9.99
                },
                {
                    "name": "Hardware",
                    "price": 0
                },
                {
                    "name": "Installation",
                    "price": 50
                },
                {
                    "name": "New Line",
                    "price": 0
                }
            ],
            "productTypes": [
                "TV",
                "Phone",
                "Broadband",
                "Mobile"
            ],
            "premiumFeatures": {
                "BTSport": true,
                "ComedyCentral": true,
                "DiscoveryChannel": true
            },
            "popularChannels": [
                {
                    "name": "BT Sport 1",
                    "channelCategory": "Sport",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/bt-sport-1.png"
                },
                {
                    "name": "Film4",
                    "channelCategory": "Movies",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/film4.png"
                },
                {
                    "name": "E4",
                    "channelCategory": "Entertainment",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/e4.png"
                },
                {
                    "name": "Dave",
                    "channelCategory": "Entertainment",
                    "logo": "https://bucket.cdndtl.co.uk/Europe/England/priority-channels/dave.png"
                }
            ]
        },
        {
            "title": "Unlimited Broadband + Weekend Calls + BT Mobile + BT Sport Pack",
            "prices": [
                {
                    "selectedOptions": [

                    ],
                    "periods": [
                        {
                            "months": 12,
                            "amount": 34.99
                        }
                    ],
                    "firstYear": 429.87,
                    "totalContractCost": 429.87,
                    "upFrontCost": 9.99,
                    "upsell": null
                }
            ],
            "id": 4527,
            "contractLength": 12,
            "tvProduct": null,
            "standardChannels": null,
            "totalChannels": null,
            "hdChannels": null,
            "speed": {
                "label": "17",
                "sortValue": 17408
            },
            "uploadSpeed": {
                "label": "1",
                "sortValue": 1024
            },
            "usage": {
                "label": "Truly Unlimited",
                "sortValue": 1001
            },
            "mobile": {
                "minutes": {
                    "label": "500",
                    "sortValue": 500
                },
                "data": {
                    "label": "5 GB",
                    "sortValue": 5
                },
                "texts": {
                    "label": "Unlimited texts",
                    "sortValue": 1000000
                },
                "connectionType": {
                    "label": "4G",
                    "sortValue": 4
                }
            },
            "offer": {
                "type": "OnlineExclusive",
                "title": "£100 BT Reward Card - see BT's website for further details",
                "smallLogo": "https://bucket.cdndtl.co.uk/bc/ICONS_70x70/BT_100RewardCard.png",
                "expiresAt": "2016-11-07T23:55:00Z"
            },
            "provider": {
                "id": 3,
                "name": "BT",
                "logo": "https://bucket.cdndtl.co.uk/bc/providerlogos/bt_99.png"
            },
            "newLineCost": 0,
            "upfrontCosts": [
                {
                    "name": "Total",
                    "price": 9.99
                },
                {
                    "name": "Delivery",
                    "price": 9.99
                },
                {
                    "name": "Hardware",
                    "price": 0
                },
                {
                    "name": "Installation",
                    "price": 0
                },
                {
                    "name": "New Line",
                    "price": 0
                }
            ],
            "productTypes": [
                "Broadband",
                "Phone",
                "Mobile"
            ],
            "premiumFeatures": {

            },
            "popularChannels": [

            ]
        },
        {
            "title": "Broadband Premium + Anytime Calls",
            "prices": [
                {
                    "selectedOptions": [

                    ],
                    "periods": [
                        {
                            "months": 18,
                            "amount": 26.99
                        },
                        {
                            "months": null,
                            "amount": 33.99
                        }
                    ],
                    "firstYear": 330.83,
                    "totalContractCost": 492.77,
                    "upFrontCost": 6.95,
                    "upsell": null
                }
            ],
            "id": 5638,
            "contractLength": 18,
            "tvProduct": null,
            "standardChannels": null,
            "totalChannels": null,
            "hdChannels": null,
            "speed": {
                "label": "52",
                "sortValue": 53248
            },
            "uploadSpeed": {
                "label": "1",
                "sortValue": 1024
            },
            "usage": {
                "label": "Truly Unlimited",
                "sortValue": 1001
            },
            "mobile": null,
            "offer": {
                "type": "None",
                "title": "Unlimited Broadband",
                "smallLogo": "https://bucket.cdndtl.co.uk/bc/ICONS_70x70/13102016ICONS/Icon-PO-UnlimitedBB.png",
                "expiresAt": "2017-08-09T05:30:00Z"
            },
            "provider": {
                "id": 43,
                "name": "Post Office",
                "logo": "https://bucket.cdndtl.co.uk/bc/providerlogos/postoffice_99.png"
            },
            "newLineCost": 0,
            "upfrontCosts": [
                {
                    "name": "Total",
                    "price": 6.95
                },
                {
                    "name": "Delivery",
                    "price": 6.95
                },
                {
                    "name": "Hardware",
                    "price": 0
                },
                {
                    "name": "Installation",
                    "price": 0
                },
                {
                    "name": "New Line",
                    "price": 0
                }
            ],
            "productTypes": [
                "Broadband",
                "Phone"
            ],
            "premiumFeatures": {

            },
            "popularChannels": null
        },
        {
            "title": "Broadband Premium + Weekend Calls",
            "prices": [
                {
                    "selectedOptions": [

                    ],
                    "periods": [
                        {
                            "months": 18,
                            "amount": 19.99
                        },
                        {
                            "months": null,
                            "amount": 26.99
                        }
                    ],
                    "firstYear": 246.83,
                    "totalContractCost": 366.77,
                    "upFrontCost": 6.95,
                    "upsell": null
                }
            ],
            "id": 4509,
            "contractLength": 18,
            "tvProduct": null,
            "standardChannels": null,
            "totalChannels": null,
            "hdChannels": null,
            "speed": {
                "label": "17",
                "sortValue": 17408
            },
            "uploadSpeed": {
                "label": "1",
                "sortValue": 1024
            },
            "usage": {
                "label": "Truly Unlimited",
                "sortValue": 1001
            },
            "extras": {
                "sortValue": 1,
                "labels": [
                    "Weekend calls inc."
                ]
            },
            "mobile": null,
            "offer": {
                "type": "None",
                "title": "Unlimited Broadband",
                "smallLogo": "https://bucket.cdndtl.co.uk/bc/ICONS_70x70/13102016ICONS/Icon-PO-UnlimitedBB.png",
                "expiresAt": "2017-08-09T05:30:00Z"
            },
            "provider": {
                "id": 43,
                "name": "Post Office",
                "logo": "https://bucket.cdndtl.co.uk/bc/providerlogos/postoffice_99.png"
            },
            "newLineCost": 0,
            "upfrontCosts": [
                {
                    "name": "Total",
                    "price": 6.95
                },
                {
                    "name": "Delivery",
                    "price": 6.95
                },
                {
                    "name": "Hardware",
                    "price": 0
                },
                {
                    "name": "Installation",
                    "price": 0
                },
                {
                    "name": "New Line",
                    "price": 0
                }
            ],
            "productTypes": [
                "Broadband",
                "Phone"
            ],
            "premiumFeatures": {

            },
            "broadbandType": "Broadband",
            "popularChannels": [

            ]
        }
    ]
}