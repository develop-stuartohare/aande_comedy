import React, {PropTypes} from 'react';

const Spacer = props =>{

	let em = 3;

	if(props.sm) em = 1.5;
	if(props.lg) em = 4.5;
	if(props.xlg) em = 6;

	var style = {
		height: em+'em'
	};


	return (
		<div className="spacer" style={style}>{props.children}</div>
	);	
};

Spacer.propTypes = {
	sm: PropTypes.bool,
	lg: PropTypes.bool,
}

Spacer.defaultProps ={}

export default Spacer;