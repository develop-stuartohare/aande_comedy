import 'jquery-inview';
import 'velocity-animate';
import React from 'react';
import {render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './root';
import configureStore from './configure-store';


import './index.less';

const store = configureStore({});


render(
    <AppContainer>
    	<Root store={store}/>
    </AppContainer>,
    document.getElementById("root")
)        
     
if (module.hot) {
    module.hot.accept('./root', () => {
    	let Root = require('./root').default;
        render(
    	    <AppContainer>
    	    	<Root store={store}/>
    	    </AppContainer>,
            document.getElementById('root')
        );
    });
}









