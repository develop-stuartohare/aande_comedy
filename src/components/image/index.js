import React, {PropTypes} from 'react';
import './image.less';

const Image = props => (
	<div className={`image-container ${props.className || ""}`}>
		<img src={props.src} role={props.role}/>
	</div>
)


Image.propTypes = {
	src: PropTypes.string.isRequired,
	role:PropTypes.string
}

Image.defaultProps = {
	role:"presentation"
}

export default Image;