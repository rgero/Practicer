// How we parse the data.
import moment from 'moment';

// Get visible costs
const getVisibleCosts = (costs, { text, sortBy, startDate, endDate }) => {
    return costs.filter((cost)=> {
        const createdMoment = moment(cost.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdMoment, 'day') : true;
        const textMatch = typeof text !== "string" || cost.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === "date"){
            //Sort by date
            return a.createdAt < b.createdAt ? 1 : -1;
        } else {
            //Sort by Amount
            return a.amount <= b.amount ? 1: -1;
        }
    })
}

const sumCosts = (costs, { text, sortBy, startDate, endDate }) => {
    var validCosts = getVisibleCosts(costs, { text, sortBy, startDate, endDate })
    var total = 0;
    validCosts.filter((cost)=> {
        total += cost.amount;
    })
    return total;
}

export {getVisibleCosts, sumCosts}