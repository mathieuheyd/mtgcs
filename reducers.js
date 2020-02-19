function colorsReducer(state = [], action) {
    switch (action.type) {
        case SELECT_COLOR:
            return [
                    ...state,
                    action.color
                ]
        case UNSELECT_COLOR:
            return state.filter(c => c != action.color);
        default:
            return state;
    }
}

function setReducer(state = 'tbd', action) {
    switch (action.type) {
        case SELECT_SET:
            return action.set;
        default:
            return state;
    }
}

const reducers = Redux.combineReducers({ colors: colorsReducer, set: setReducer });