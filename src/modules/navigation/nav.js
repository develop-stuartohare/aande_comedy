import React from 'react';
import Navigation from '../../components/navigation';
import Float from '../../components/float';

import './nav.less';

const Nav = () => {

	return (
        <Navigation>            
            <Navigation.Item href="#home" label="Home" />
            <Navigation.Item href="#videos" label="Videos" />
            <Navigation.Item href="#about" label="About" />
            <Navigation.Item href="#images" label="Images" />
            <Navigation.Item href="#press" label="Press" />
            <Float.Right>
                <Navigation.Item href="mailto:info@aandecomedy.com" label="info@aandecomedy.co.uk"/>                    
            </Float.Right>
        </Navigation>
	)
}


export default Nav;