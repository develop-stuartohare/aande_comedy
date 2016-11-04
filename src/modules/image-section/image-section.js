import React from 'react';
import './image-section.less';

import Section from '../../components/section';
import Container from '../../components/container';
import ImageGallery from '../../components/image-gallery';

import images from './image-data';


const ImageSection = () => (
	<Section className="image-section" id="images">
		<Container>
			<ImageGallery images={images}/>
		</Container>
	</Section>
)

export default ImageSection;