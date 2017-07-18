export default function MobileFilter(deal, filters) {
    var hasMobileType = deal.productTypes.includes("Mobile");
    return filters.Mobile ? hasMobileType : !hasMobileType;
}