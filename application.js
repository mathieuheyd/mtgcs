

const store = Redux.createStore(reducers, loadState());
store.subscribe(() => {
    saveState(store.getState());
});


// debug
window.store = store;

const colorsContainer = document.querySelector('#color_selector');
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <ConnectedSetSelector />
        <ColorsSelector />
        <ConnectedCardsFetcher />
    </ReactRedux.Provider>,
    colorsContainer);
