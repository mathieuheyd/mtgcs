function colors(state = { colors: [] }, action) {
    switch (action.type) {
        case SELECT_COLOR:
            return {
                colors: [
                    ...state.colors,
                    action.color
                ]
            }
        case UNSELECT_COLOR:
            return {
                colors: state.colors.filter(c => c != action.color)
            }
        default:
            return state;
    }
}

const reducers = colors;