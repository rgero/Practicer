// This is the instruments reducer
const instrumentsReducerDefaultState = [];
const instrumentsReducer = (state = instrumentsReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_INSTRUMENT":
            return state.concat(action.instrument);
        case "REMOVE_INSTRUMENT":
            return state.filter(function(testOption){
                return action.id !== testOption.id;
            })
        case "EDIT_INSTRUMENT":
            return state.map( (instrument) => {
                if (instrument.id === action.id) {
                    return {
                        ...instrument,
                        ...action.update
                    }
                } else {
                    return instrument;
                }
            })
        case 'SET_INSTRUMENTS':
            return action.instruments;
        default:
            return state;
    }
};

export default instrumentsReducer;