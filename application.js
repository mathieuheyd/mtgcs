

const store = Redux.createStore(reducers);
window.store = store;

const colorsContainer = document.querySelector('#color_selector');
ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <ConnectedSetSelector />
        <ColorsSelector />
        <ConnectedCardsFetcher />
    </ReactRedux.Provider>,
    colorsContainer);
