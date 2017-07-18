export default function TVFilter(deal, filters) {
    var hasTVType = deal.productTypes.includes("TV");
    return filters.TV ? hasTVType : !hasTVType;
}