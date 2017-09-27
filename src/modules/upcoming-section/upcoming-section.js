import React, {Component} from 'react';
import './upcoming-section.less';

import classnames from 'classnames';
import Row from '../../components/row';
import Col from '../../components/col';
import InView from '../../components/in-view';
import Section from '../../components/section';
import Container from '../../components/container';
import Image from '../../components/image';
import ReactPlayer from 'react-player';

import KarenJackieImage from '../../assets/images/jackieandkaren3_small.jpg';
import CrusadersImage from '../../assets/images/crusaders.jpeg';
import KarenJackieBWImage from '../../assets/images/karenandjackieb&w2_small.jpg';


import Scroll from '../../containers/scroll';


import ImageBlanker from '../../components/image-blanker';

const Text1 = (
	<div>
	<span className="text-1">
		<span className="e-t-d">Enter The Dragons</span> takes a frank, funny and fearless <br/>
		look at the subject of female aging,<br/>
		examining the concerns and societal pressures <br/>that surround women as they pass fifty
	</span>
		<div className="show-dates">
			<a href={'http://www.thecourtyard.org.uk/whatson/956/enter-the-dragons'} target="_blank">Courtyard Theatre, London, Oct 18/19/20 </a><br/>

		</div>
	</div>
);
const Quote1 = <span>This is a perfect show - great performance, beautiful writing.<br/> I think it speaks to men, like me, too</span>
const Text2 = <div className="text-2"><div className="block block-a">The show reclaims the archetypal Hero's Journey and reframes <br/>it from the perspective of the mature woman.</div><div className="block block-b">Banished from the land of the young, and beset by challenges, riddles and <br/>obstacles, our Protagonist must navigate this weird landscape, guided by mystical <br/>creatures and Seers who have gone before.</div></div>
const Quote2 = <span>I'm 25 and it spoke to me so much - I'm fed so much stuff everywhere about looking young, being young, looking after myself now for the future and it's so much pressure. Was nice to be told getting old is okay!</span>
const Text3 = (
	<div className="text-3">
		<p>What wisdom can they impart? How can she best equip herself to defeat the demons? Expect stupid characters, ridiculous costumes, puppetry, buffoonery and many, many wigs.</p>
		<div className="credits">
			Written and performed by <br/>Abigail Dooley and Emma Edwards<br/>Direction by Toby Park and Will Kerley
		</div>
		<div className="about-content">
			70 mins, small to mid scale <br/>Accompanying workshop available
		</div>
	</div>
)
const Quote3 = <span>As a woman of 55 this piece really spoke to me, in a beautifully playful and frivolous way but with a 'serious' and thought provoking message. Excellent!</span>
const Quote4 = <span>The serious message hits home because of the strength of the comedy. Great classic clown duo.</span>



const TextAndGraphic=props=>{

	let className = classnames("text-and-graphic-block", props.className)

	let {imageWidth, textWidth} = props;
	return (
		<div className={className}>
			<Container>
				<Row>
					<Col width={imageWidth}>
						<Image src={props.image} />
					</Col>
					<Col width={textWidth} className="col-text">
						{props.text}
					</Col>
				</Row>
			</Container>
		</div>
	)
}

TextAndGraphic.defaultProps = {
	textWidth:50,
	imageWidth:50,
}

const QuotationBlock = props => {

	return (

		<div className="quotation-block">
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

//<div className="quote-start">&#8220;</div>
// <div className="quote-end">&#8221;</div>

const FullWidthImageAndText = props =>{

	return(
		<div className="full-width-gfx">
			<InView>
				<div className="text-content">
					<div className="text-content-inner">
					{props.text}
					</div>
				</div>
			</InView>
			<Image src={props.image}/>
		</div>
	)
}



class UpcomingSection extends Component {

	constructor(props) {
		super(props);
		this.isMobile = $(window).width()<1024;
	}
	render(){

		let videoProps = {
			width:"100%"
		}
		if(!this.isMobile) {
			videoProps= {
				width:1000,
				height:570
			}
		}

		return(
			<Section className="upcoming-section" id="upcoming">

				<FullWidthImageAndText image={KarenJackieImage} text={Text1}/>
				<QuotationBlock>
					{Quote1}
				</QuotationBlock>
				<FullWidthImageAndText image={KarenJackieBWImage} text={Text2}/>
				<QuotationBlock>
					{Quote2}
				</QuotationBlock>
				<TextAndGraphic className="crusaders" image={CrusadersImage} text={Text3} textWidth={63} imageWidth={37}/>
				<QuotationBlock>
					{Quote3}
				</QuotationBlock>
				<Container>
					<div className="video-content">
					<ReactPlayer url={'https://player.vimeo.com/video/183633554'} {...videoProps}/>
					</div>
				</Container>
				<QuotationBlock>
					{Quote4}
				</QuotationBlock>
			</Section>
		)
	}
}



export default UpcomingSection;
