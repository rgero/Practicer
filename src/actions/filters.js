// This is where we are storing the action generators for filters

export const setTextFilter = ( newText='' ) => ({
    type: "SET_TEXT",
    newText
})

export const sortDirection= ( sortDirectionValue="") => ({
    type: "SORT_DIRECTION",
    sortDirectionValue
})

export const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate
})

export const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate
})

export const sortCostByAmount = () => ({
    type: "SORT_COST_BY_AMOUNT",
})

export const sortCostByDate = () => ({
    type: "SORT_COST_BY_DATE",
})
