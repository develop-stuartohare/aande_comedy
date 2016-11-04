import React from 'react';
import './press-section.less';

import Section from '../../components/section';
import Container from '../../components/container';
import Image from '../../components/image';

import AbigailHeadImage from './images/abigail_head_press.png';
import ChairImage from './images/bodies_chair_revised.png';
import EmmaHeadImage from './images/emma_head_press.png';
import TheEndImage from './images/the_end.png';
import ReadThisImage from './images/read_this.png';



const ReadThis = props =>(
	<a href="http://www.funnywomen.com/magazine/article/308/how-to-write-a-sitcom-the-winners-of-the-2012-sitcom-mission-tell-us-how" target="_blank" className="read-this osc-scale-animation">		
		<Image src={ReadThisImage}/>		
	</a>
)


const Sofa = ()=> (
	<div className="sofa">
		<div className="chair">
			<Image src={ChairImage}/>
		</div>
		<div className="abigail-head">
			<Image src={AbigailHeadImage}/>	
		</div>
		<div className="emma-head">
			<Image src={EmmaHeadImage}/>
		</div>
		<ReadThis/>
	</div>
)

const Footer = ()=> (
	<div className="footer">	
		<div className="the-end">		
			<Image src={TheEndImage}/>
		</div>
	</div>	
)
const PressSection = () => (
	<Section className="press-section" id="press">
		<Container>
			<Sofa/>			
		</Container>
		<Footer/>
	</Section>
)

export default PressSection;