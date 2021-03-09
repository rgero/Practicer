import moment from 'moment';

// Get visible practices
const getVisiblePractices = (practices, inputParams) => {
    var text = inputParams.text;
    var sortByValue = inputParams.sortBy;
    var startDate = inputParams.startDate;
    var endDate = inputParams.endDate;
    return practices.filter((practice)=> {
        const practiceDate = moment(practice.practiceDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(practiceDate, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(practiceDate, 'day') : true;
        const textMatch = typeof text !== "string" || practice.type.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortByValue === "ascending"){
            return moment(a.practiceDate).isSameOrAfter(moment(b.practiceDate), 'day') ? 1 : -1;
        } else {
            return moment(a.practiceDate).isSameOrAfter(moment(b.practiceDate), 'day') ? -1: 1;
        }
    })
}

export {getVisiblePractices}