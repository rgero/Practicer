// This is where we are storing the action generators for filters

export const setTextFilter = ( newText='' ) => ({
    type: "SET_TEXT",
    newText
})

export const sortBy = ( sortByValue="") => ({
    type: "SORT_BY",
    sortByValue
})

export const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate
})

export const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate
})