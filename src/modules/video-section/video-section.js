import React from 'react';
import './video-section.less';

import InView from '../../components/in-view';
import Section from '../../components/section';
import VideoModalCarousel from '../../components/video-modal-carousel';
import Container from '../../components/container';

import videos from './video-data';
import './video-section.less';

import Abigail from './abigail';
import Emma from './emma';

const VideoSection = () => (
	<Section className="video-section" id="videos">
		<Container>			
			<Abigail/>			
			<VideoModalCarousel videos={videos}/>			
			<Emma/>			
		</Container>
	</Section>	
)

export default VideoSection;

// import {scrollConnect} from '../../containers/scroll';

// export default scrollConnect(
// 	{
// 		'#abigail-pointing':{
// 			x:{
// 				// start:-900,
// 				start:-500,
// 				end:0,
// 				offset:6854
// 			}				
// 		},
// 		'#emma-pointing':{
// 			x:{
// 				// start:900,
// 				start:500,
// 				end:0,
// 				offset:7054
// 			}		
// 		}		
// 	}
// )(VideoSection);
