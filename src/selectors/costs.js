// How we parse the data.
import moment from 'moment';

// Get visible costs
const getVisibleCosts = (costs, { text, sortCostBy, sortDirection, startDate, endDate }) => {
    return costs.filter((cost)=> {
        const createdMoment = moment(cost.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdMoment, 'day') : true;
        const textMatch = typeof text !== "string" || cost.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortCostBy === "date"){
            //Sort by date
            if (sortDirection === "ascending"){
                return moment(a.createdMoment).isSameOrAfter(moment(b.createdMoment), 'day') ? 1 : -1;
            } else {
                return moment(a.createdMoment).isSameOrAfter(moment(b.createdMoment), 'day') ? -1: 1;
            }
        } else {
            //Sort by Amount
            if (sortDirection === "ascending"){
                return a.amount >= b.amount ? 1: -1;
            } else {
                return a.amount <= b.amount ? 1: -1;
            }
        }
        
    })
}

const sumCosts = (costs, { text, sortCostBy, sortDirection, startDate, endDate }) => {
    var validCosts = getVisibleCosts(costs, { text, sortCostBy, sortDirection, startDate, endDate })
    var total = 0;
    validCosts.filter((cost)=> {
        total += cost.amount;
    })
    return total;
}

export {getVisibleCosts, sumCosts}