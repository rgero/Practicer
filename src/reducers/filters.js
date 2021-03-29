const filtersDefaultState = {
    text: "",
    sortDirection: "descending",
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
    switch(action.type){
        case "SET_TEXT":
            return {
                ...state,
                text: action.newText
            }
        case "SORT_DIRECTION":
            return {
                ...state,
                sortDirection: action.sortDirectionValue
            }
        case "SORT_COST_BY_AMOUNT":
            return {
                ...state,
                sortCostBy: "amount"
            }
        case "SORT_COST_BY_DATE":
            return {
                ...state,
                sortCostBy: "date"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

export default filtersReducer