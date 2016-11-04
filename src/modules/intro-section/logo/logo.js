import React from 'react';

import './logo.css';
import LogoImage from './images/logo_final.png'

const Logo = props =>{

	return (
		<div className="logo" id={props.id}>
			<img src={LogoImage} role="presentation"/>
		</div>
	)
}

export default Logo;