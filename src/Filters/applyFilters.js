import broadbandFilter from './broadbandFilter';
import tvFilter from './tvFilter';
import mobileFilter from './mobileFilter';
import speedFilter from './speedFilter';
let allFilters = [broadbandFilter,tvFilter,mobileFilter,speedFilter];

export default function applyFilters(deal,filters) {
    return allFilters.every(filter => filter(deal,filters));
}