import React from 'react';

import Image from '../../../components/image';

import BodyImage from './images/emma_point_man_colour.png';
import FingerImage from './images/emma_finger_colour.png';
import HeadImage from './images/emma_smallHeadNew.png';

import './emma.less';

const Abigail = props =>{

	return (
		<div className="emma-pointing" id="emma-pointing">
			<Image src={BodyImage} className="emma-pointing-body"/>
			<Image src={FingerImage} className="emma-pointing-finger wiggle-animation-hover"/>
			<Image src={HeadImage} className="emma-pointing-head wiggle-animation"/>
		</div>
	)
}

export default Abigail;