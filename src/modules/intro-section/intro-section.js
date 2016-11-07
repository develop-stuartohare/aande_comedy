import React, {Component} from 'react';
import './intro-section.less';

import Logo from './logo';
import SpeechBubble from './speech-bubble';
import Clouds from './clouds';
import IntroHeads from './heads';



import Container from '../../components/container';
import Section from '../../components/section';
import TextBox from '../../components/text-box';
import Image from '../../components/image';
import Float from '../../components/float';
import ReactPlayer from 'react-player';


import Scroll from '../../containers/scroll';


class IntroSection extends Component {

	onClick(e){
		
		e.preventDefault();
		$('#upcoming').velocity("scroll", { duration: 2000 });
	}

	render(){
		return (
			<Section className="intro-section" id="home">							
				<Container>									
					<Logo id="logo"/>						
					<SpeechBubble id="speech-bubble">
						<p className="coming-soon">Coming Soon Spring 2017</p>
						<h1 className="upcoming-link e-t-d osc-scale-animation">
							<a href="#upcoming" onClick={this.onClick.bind(this)}>Enter The Dragons<br/><div className="arrow"/></a>
						</h1>						
					</SpeechBubble>				
				</Container>		
				<Clouds>		
					<IntroHeads/>				
				</Clouds>
			</Section>			
		)
	}
}	


import {scrollConnect} from '../../containers/scroll';

export default scrollConnect(
	{
		// '#logo':{
		// 	y:0.5				
		// },
		'#speech-bubble':{
			y:-0.2		
		}		
	}
)(IntroSection);
