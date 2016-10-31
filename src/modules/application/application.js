import React from 'react';
import './application.less';

import Navigation from '../navigation';
import IntroSection from '../intro-section';
import VideoSection from '../video-section';
import ImageSection from '../image-section';
import AboutSection from '../about-section';
import PressSection from '../press-section';


const Application = () => (
	<div className="application">
		<Navigation/>
		<div className="application-content">
			<IntroSection/>
			<VideoSection/>
			<ImageSection/>
			<AboutSection/>
			<PressSection/>
		</div>
	</div>
)

export default Application;