export default function broadbandFilter(deal, filters) {
    var hasBroadbandType = deal.productTypes.includes("Broadband");
    return filters.Broadband ? hasBroadbandType : !hasBroadbandType;
}