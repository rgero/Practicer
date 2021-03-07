import moment from 'moment';
const filtersDefaultState = {
    text: "",
    sortBy: "descending",
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
        case "SORT_BY":
            return {
                ...state,
                sortBy: action.sortByValue
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