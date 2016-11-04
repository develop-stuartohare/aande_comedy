import React from 'react';
import './intro-section.less';

import Logo from './logo';
import TwitterFeed from './twitter-feed';
import SpeechBubble from './speech-bubble';
import Clouds from './clouds';
import EmmaHead from './head-emma';
import AbigailHead from './head-abigail';


import Container from '../../components/container';
import TextBox from '../../components/text-box';
import Image from '../../components/image';
import Float from '../../components/float';
import ReactPlayer from 'react-player';

import KarenJackieImage from '../../assets/images/jackieandkaren3_small.jpg';
import CrusadersImage from '../../assets/images/crusaders.jpeg';
import KarenJackieBWImage from '../../assets/images/karenandjackieb&w2_small.jpg';

import Spacer from '../../components/spacer'
import Scroll from '../../containers/scroll';




import ImageBlanker from '../../components/image-blanker';

const Text1 = () => (
	<ImageBlanker className="text-box-1" src={KarenJackieImage}>
		Enter The Dragons takes a frank,  funny and fearless look at the subject of female aging, examining the concerns and societal pressures that surround women as they pass fifty
	</ImageBlanker>
)

const Text2 = () => (
	<ImageBlanker className="text-box-2" src={CrusadersImage}>
		The show reclaims the archetypal Hero’s Journey and reframes it from the perspective of the mature woman
	</ImageBlanker>
)

const Text3 = () => (
	<ImageBlanker className="text-box-3" src={KarenJackieBWImage}>
		Banished from the land of the young, and beset by challenges, riddles and obstacles, our Protagonist must navigate this weird landscape, guided by mystical creatures and Seers who have gone before
	</ImageBlanker>
)


const Text4 = () => (
	<ImageBlanker className="text-box-4" src={KarenJackieBWImage}>
		<p>What wisdom can they impart? How can she best equip herself to defeat the demons? Expect stupid characters, ridiculous costumes, puppetry, buffoonery and many, many wigs</p>
		<p>Written and performed by Abigail Dooley and Emma Edwards. Direction by Toby Park and Will Kerley</p>
		<p>70 mins, Small to mid scale.Accompanying workshop available</p>
	</ImageBlanker>
)


const Text5 = () => (
	<ImageBlanker className="text-box-5" src={KarenJackieBWImage}>
		<p><i>“This is a perfect show – great performance, beautiful writing. I think it speaks to men, like me, too.”</i></p>
		<p><i>“I’m 25 and it spoke to me so much – I’m fed so much stuff everywhere about looking young, being young, looking after myself now for the future and it’s so much pressure. Was nice to be told getting old is okay!” </i></p>
		<p><i>“As a woman of 55 this piece really spoke to me, in a beautifully playful and frivolous way but with a ‘serious’ and thought provoking message. Excellent!”</i></p>
		<p><i>“The serious message hits home because of the strength of the comedy. Great classic clown duo.”</i></p>
	</ImageBlanker>
)


const IntroSection = () => (	
	<section className="intro-section">							
		<Container>			
			
			<Scroll y={-10} start={0} end={3875}><Logo/></Scroll>
			<SpeechBubble>
				<h1>Coming soon spring 2017</h1>
				<p>Enter The Dragons</p>
			</SpeechBubble>	
			<Container small>				
				<Text1/>
				<Spacer lg/>									
				<Text2/>	
				<Spacer lg/>			
				<Text3/>	
				<Spacer lg/>			
				<Text4/>
				<Spacer lg/>
				<ReactPlayer url={'https://player.vimeo.com/video/183633554'} width="100%"/>
				<Spacer lg/>
				<Text5/>
			</Container>					
			<Scroll y={100} start={0} end={3875}><EmmaHead/></Scroll>
			<Scroll y={100} start={0} end={3875}><AbigailHead/></Scroll>		
		</Container>
		
		<Clouds/>
	</section>
)

export default IntroSection;

// import {ScrollConnect} from '../../containers/scroll';
// const animations = el =>{
// 	return [{
// 		selector: 		
// 	}]
// }

// export default ScrollConnect(animations)(IntroSection);
