import React, {PropTypes, Component} from 'react';

import Gallery from '../gallery';
import Image from '../image';

import './image-gallery.less';

class ImageGallery extends Component {

	constructor() {
		super(...arguments);

		this.onThumbClicked = this.onThumbClicked.bind(this);
		this.isMobile = $(window).width()<1024;
		
		this.state= {
			selectedImage: this.props.selectedImage || 0
		}		
	}

	onThumbClicked(props){		
		this.setState({
			selectedImage: props.idx
		})
	}

	componentDidUpdate(prevProps) {
		if(prevProps.selectedImage !== this.props.selectedImage){

			this.setState({
				selectedImage: this.props.selectedImage
			})
		}
	}


	render(){

		let {images} = this.props;
		let {selectedImage} = this.state;
		let currentImage = images[selectedImage];

		if(this.isMobile){

			return (
			<Gallery className="image-gallery">
				<Gallery.Main>
					{images.map((image, idx)=>{
						image.idx = idx;						
						return (
							<Gallery.Item visible={true} key={idx}>
								<Gallery.Title>{image.title}</Gallery.Title>
								<Gallery.Media>
									<Image src={image.src}/>	
								</Gallery.Media>
								<Gallery.Description>
									<div dangerouslySetInnerHTML={{__html: image.description}} />							
								</Gallery.Description>
							</Gallery.Item>	
						)
					})}							
				</Gallery.Main>								
			</Gallery>				
			)
		}

		return (
			
			<Gallery className="image-gallery">
				<Gallery.Sidebar>
					{images.map((image, idx)=>{
						image.idx = idx;
						return <Gallery.Thumb key={idx} {...image}  active={idx==selectedImage} onClick={this.onThumbClicked}/>
					})}
				</Gallery.Sidebar>
				<Gallery.Main>
					<Gallery.Item visible={true}>
						<Gallery.Title>{currentImage.title}</Gallery.Title>
						<Gallery.Media>
							<Image src={currentImage.src}/>	
						</Gallery.Media>
						<Gallery.Description>
							<div dangerouslySetInnerHTML={{__html: currentImage.description}} />							
						</Gallery.Description>
					</Gallery.Item>								
				</Gallery.Main>								
			</Gallery>

		)		
	}
}


ImageGallery.propTypes = {
	images: PropTypes.array.isRequired
}

export default ImageGallery;