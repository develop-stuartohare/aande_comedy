import React from 'react';

import Image from '../image';

import TwitterLogo from './images/twitter_bird.png';

const TwitterFeed = () =>{

	return (
        <div className="twitter-feed">        	            
            <a href="https://twitter.com/ae_comedy" target="_blank"><Image src={TwitterLogo}/></a>
            <div id="iTweetRoot"></div>                                        
        </div>          
	)
}

export default TwitterFeed;