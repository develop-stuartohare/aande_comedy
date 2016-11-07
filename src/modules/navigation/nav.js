import React from 'react';
import Navigation from '../../components/navigation';
import Float from '../../components/float';
import TwitterFeed from '../../components/twitter-feed';

import './nav.less';

const Nav = () => {

	return (
        <Navigation>            
            <Navigation.Item href="#home" label="Home" />
            <Navigation.Item href="#upcoming" label="New" />
            <Navigation.Item href="#videos" label="Videos" />
            <Navigation.Item href="#about" label="About" />
            <Navigation.Item href="#images" label="Images" />
            <Navigation.Item href="#press" label="Press" />
            <Float.Right>
                <Navigation.Item href="mailto:info@aandecomedy.co.uk" label="info@aandecomedy.co.uk" default/>                    
                <TwitterFeed/>
            </Float.Right>
        </Navigation>
	)
}


export default Nav;