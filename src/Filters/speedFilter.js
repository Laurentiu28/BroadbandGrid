export default function speedFilter(deal, filters) {
    if(filters.Speed == 'any') {
        return true;
    };
    
    return filters.Speed == deal.speed.label;
}