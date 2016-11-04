import React from 'react';
import './about-section.less';

import classnames from 'classnames';

import InView from '../../components/in-view';
import Section from '../../components/section';
import Container from '../../components/container';
import Image from '../../components/image';
import TextBox from '../../components/text-box';

import RoadImage from './images/roadNew.png';
import AbigailHeadImage from './images/abigail_head_screen3.png';
import AbigailArrowImage from './images/abigailArrow.png';
import AbigailHatImage from './images/baseball_cap_screen3.png';
import EmmaArrowImage from './images/emmaArrow.png';
import EmmaHeadImage from './images/emma_head_screen3.png';
import EmmaHatImage from './images/viking_hat_screen3.png';


import './about-section.less';

const QuotationBlock = props => {

	let className = classnames('quotation-block', props.className);
	return (	

		<div className={className}>
			<InView>
				<div className="quotation-block-content">
					
					<div className="quote-content">
						{props.children}						
					</div>
					
				</div>
			</InView>			
		</div>		
	)
}


const Road = ()=>(
	<div className="road-bg">
		<Image src={RoadImage}/>
	</div>
)

const EmmaHead = ()=>(
	<div className="emma-head">
		<Image src={EmmaHeadImage}/>
	</div>
)

const EmmaHat = ()=>(
	<div className="emma-hat">
		<Image src={EmmaHatImage}/>
	</div>
)

const EmmaArrow = ()=>(
	<div className="emma-arrow">
		<Image src={EmmaArrowImage}/>
	</div>
)

const AbigailHead = ()=>(
	<div className="abigail-head">
		<Image src={AbigailHeadImage}/>
	</div>
)

const AbigailHat = ()=>(
	<div className="abigail-hat">		
		<Image src={AbigailHatImage}/>
	</div>
)

const AbigailArrow = ()=>(
	<div className="abigail-arrow">
		<Image src={AbigailArrowImage}/>
	</div>
)


const Text1 = (
	<div className="text-1">
		Abigail and Emma were born to two different sets of parents and raised apart. Unaware of each others' existence for several decades, they led completely separate lives. 		
	</div>
)

const TextBox2 = ()=>(
	<TextBox className="text-box-2">
		<b>ABIGAIL</b> trained at East 15 Acting School and then five years trying to be the next Dame Judy. After embarrassing family and friends she retrained with physical theatre guru, Philippe Gaulier (alumni include Sacha Baron Cohen, Roberto Begnini and Simon McBurney). She then spent a happy, hilarious time travelling the land in a transit van, devising and performing with companies including Companie Philippe Gaulier, Trestle, and Told by an Idiot. At some point she decided to grow up and get a proper job, so became a theatre director then got really serious and added teacher to her CV.
	</TextBox>
)

const TextBox3 = ()=>(
	<TextBox className="text-box-3">
		Meanwhile, <b>EMMA</b> studied creative arts in Manchester, and like Abigail went on to train with legendary clown maestro Philippe Gaulier. She then spent a similar amount of time in transit vans acting the goat for a living, unaware that Abigail was on a parallel motorway doing exactly the same thing. For twenty years she has been artistic director of award winning Facepack Theatre, renowned for their work with young people. Having hung up her performing trousers she now teaches a range of skills including mask-making and performance, mime, physical theatre and clowning.		
	</TextBox>
)

const Text4 = (
	<div className="text-4">
		5 years ago their paths finally crossed and since then they have attended some writing courses (Robert Mckee, Noel Grieg and Steve Kaplan) and made up lots of jokes. In 2011 they won the Sitcom Mission competition with their sitcom 'What Next', which was judged by Lucy Lumsden (Sky) and Andy Hamilton (Hat Trick). Since then 'What Next' has been optioned by Hat Trick Productions and is currently in development. They have recently collaborated with Spymonkey Comedy on "Fleapit", a cinema-set sitcom (see link above). Which is which? Abigail has hair like Beethoven, and Emma has hair like Jane from Rod, Jane and Freddie. Abigail is a tri-athlete. Emma can't catch. Between them they have one dog, two dwarf hamsters, five children, and no shame.
	</div>
)

const AboutSection = () => (
	<Section className="about-section" id="about">
		<QuotationBlock>
			{Text1}
		</QuotationBlock>
		<Container className="about-container">
			<Road/>
			<AbigailHead/>
			<InView>
				<AbigailHat/>
			</InView>							
			<InView>
				<TextBox2/>
			</InView>
			<EmmaHead/>			
			<InView>
				<EmmaHat/>
			</InView>	
			<InView>
				<TextBox3/>
			</InView>
		</Container>
		<QuotationBlock className="second">
			{Text4}
		</QuotationBlock>		
	</Section>
)

export default AboutSection;