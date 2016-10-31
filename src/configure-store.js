import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import reducers from './reducers';

var devTools = f => f;

if(process.browser){
    devTools = window.devToolsExtension ? window.devToolsExtension() : devTools;
}

export default function configureStore( initialState = {}) {
    
    let middleware = compose( 
        applyMiddleware(thunk),       
        devTools
    );
    const store = createStore(
        reducers,
        initialState,
        middleware
    );


    if (module.hot) {
        module.hot.accept('./reducers', () =>
            store.replaceReducer(require('./reducers').default)
        );
    }    

    return store;
}