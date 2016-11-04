import React from 'react';

import Image from '../../../components/image';

import BodyImage from './images/abigail_man_pointing.png';
import FingerImage from './images/abigail_pointing_finger.png';
import HeadImage from './images/abigailPointNewHead.png';

import './abigail.less';

const Abigail = props =>{

	return (
		<div className="abigail-pointing" id="abigail-pointing">
			<Image src={BodyImage} className="abigail-pointing-body"/>
			<Image src={FingerImage} className="abigail-pointing-finger wiggle-animation-hover"/>
			<Image src={HeadImage} className="abigail-pointing-head wiggle-animation"/>
		</div>
	)
}

export default Abigail;