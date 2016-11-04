import React from 'react';

import Image from '../../../components/image';

import SpeechBubbleImage from './images/cloud.png';
import './speech-bubble.less';

const SpeechBubble = props =>(

    <div className="speech-bubble rockin-animation" id={props.id}>
    	
	    	<Image src={SpeechBubbleImage}/>  
	    	<div className="speech-bubble-content">
	    		<span className="speech-bubble-content-inner">
	    			{props.children}
	    		</span>
	    	</div>                            
    	</div>        
  
)

export default SpeechBubble;