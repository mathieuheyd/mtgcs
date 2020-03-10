function loadState() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return underfined;
    }
}

function saveState(state) {
    try {
        var partialState = {
            set: state.set,
            colors: state.colors
        }
        const serializedState = JSON.stringify(partialState);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log('Failed to save state');
    }
}