// This is the costs reducer
const costsReducerDefaultState = [];
const costsReducer = (state = costsReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_COST":
            return state.concat(action.cost);
        case "REMOVE_COST":
            return state.filter(function(testOption){
                return action.id !== testOption.id;
            })
        case "EDIT_COST":
            return state.map( (cost) => {
                if (cost.id === action.id) {
                    return {
                        ...cost,
                        ...action.update
                    }
                } else {
                    return cost;
                }
            })
        case 'SET_COSTS':
            return action.costs;
        default:
            return state;
    }
};

export default costsReducer;