import React, {PropTypes, Component} from 'react';

import Carousel, {CarouselItem} from '../carousel';
import Gallery from '../gallery';
import Modal from '../modal';
import Image from '../image';

import './video-modal-carousel.less';

import ReactPlayer from 'react-player';


class VideoGallery extends Component {

	constructor() {
		super(...arguments);

		this.onThumbClicked = this.onThumbClicked.bind(this);
		
		this.state= {
			activeVideo: this.props.activeVideo || 0
		}		
	}

	onThumbClicked(props){

		this.setState({
			activeVideo: props.idx
		})
	}

	componentDidUpdate(prevProps) {
		if(prevProps.activeVideo !== this.props.activeVideo){

			this.setState({
				activeVideo: this.props.activeVideo
			})
		}
	}


	render(){

		let {videos} = this.props;
		let {activeVideo} = this.state;
		let currentVideo = videos[activeVideo];

		return (
			<Gallery>
				<Gallery.Sidebar>
					{videos.map((video, idx)=>{
						return <Gallery.Thumb key={idx} {...video} src={video.thumb} active={idx==activeVideo} onClick={this.onThumbClicked}/>
					})}
				</Gallery.Sidebar>
				<Gallery.Main>
					<Gallery.Item visible={true}>
						<Gallery.Title>{currentVideo.title}</Gallery.Title>
						<Gallery.Media>
							<ReactPlayer url={currentVideo.url} width="100%" playing={false}/>
						</Gallery.Media>
						<Gallery.Description>
							{currentVideo.description}
						</Gallery.Description>
					</Gallery.Item>								
				</Gallery.Main>				
			</Gallery>
		)		
	}
}

class VideoModalCarousel extends Component {

	constructor() {
		super(...arguments);

		this.state= {
			activeVideo: null,
		}		
	}

	onImageClicked(idx, e){		
		e.preventDefault();				
		this.setState({activeVideo: idx})
	}

	onModalClose(){
		
		this.setState({activeVideo:null})
	}

	renderCarousel(){

		let {videos} = this.props;
		let slides = [];
		let tmp;

		for(let i=0;i<videos.length;i++){
			if(i%2==0)tmp=[];

			let video = videos[i];
			video.idx = i;
			tmp.push(video);
			if(tmp.length==2 || i==videos.length-1) slides.push(tmp);
		}
	
		let carouselItems = slides.map((slide, i) =>
			<CarouselItem key={i}>
				{slide.map((video, idx)=>( 
					<a href="#" key={idx} className="carousel-item-link" onClick={this.onImageClicked.bind(this, video.idx)}>
						<div className="carousel-item-play-icon"/>
						<Image src={video.thumb}/>
					</a>
				))}
			</CarouselItem>			
		)

		return <Carousel>{carouselItems}</Carousel>;
	}

	renderModal(){

		let {activeVideo} = this.state;				
		if(activeVideo === null) return "";

		return (
			<Modal show={activeVideo !== null} onClose={this.onModalClose.bind(this)}>
				<VideoGallery videos={this.props.videos} activeVideo={activeVideo}/>
			</Modal>									
		)
	}

	render(){
				
		return (
			<div className="video-modal-carousel">				
				{this.renderCarousel()}										
				{this.renderModal()}
			</div>
		)
	}
}


VideoModalCarousel.porpTypes = {
	videos: PropTypes.array.isRequired
}

export default VideoModalCarousel;