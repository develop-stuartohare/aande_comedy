import React from 'react';
import {render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './root';
import configureStore from './configure-store';

const store = configureStore({});


render(
    <AppContainer>
    	<Root store={store}/>
    </AppContainer>,
    document.getElementById("root")
)        
     
if (module.hot) {
    module.hot.accept('./root', () => {
    	let Root = require('./root');
        render(
	    <AppContainer>
	    	<Root store={store}/>
	    </AppContainer>,
        document.getElementById('root')
        );
    });
}









