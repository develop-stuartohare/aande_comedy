import React, {Component} from 'react';
import './application.less';

import Navigation from '../navigation';
import IntroSection from '../intro-section';
import UpcomingSection from '../upcoming-section';
import VideoSection from '../video-section';
import ImageSection from '../image-section';
import AboutSection from '../about-section';
import PressSection from '../press-section';


import {ScrollProvider} from '../../containers/scroll';

class Application extends Component {

	constructor(){
		super(...arguments);
		this.isMobile = $(window).width() <1024;
	}
	render(){

	 return (
	 	<ScrollProvider disabled={this.isMobile}>
			<div className="application">
				<Navigation/>
				<div className="application-content">
					<IntroSection/>
					<UpcomingSection/>
					<VideoSection/>			
					<AboutSection/>
					<ImageSection/>
					<PressSection/>
				</div>
			</div>
		</ScrollProvider>
		)
	}
}

export default Application;