// This is the practices reducer
const practicesReducerDefaultState = [];
const practicesReducer = (state = practicesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_PRACTICE":
            return state.concat(action.practice);
        case "REMOVE_PRACTICE":
            return state.filter(function(testOption){
                return action.id !== testOption.id;
            })
        case "EDIT_PRACTICE":
            return state.map( (practice) => {
                if (practice.id === action.id) {
                    return {
                        ...practice,
                        ...action.update
                    }
                } else {
                    return practice;
                }
            })
        case 'SET_PRACTICES':
            return action.practices;
        default:
            return state;
    }
};

export default practicesReducer;