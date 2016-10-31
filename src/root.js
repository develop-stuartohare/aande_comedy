import React, {PropTypes} from 'react';
import { Provider } from 'react-redux';

import Application from './modules/application'

const Root = props =>(
    <Provider store={props.store}>
        <Application/>
    </Provider> 
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}
export default Root;