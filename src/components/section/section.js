import React from 'react';
import './section.less';

const Section = props => (
	<section className={"section "+props.className} id={props.id}>
		<div className="section-bg"/>
		{props.children}	
	</section>	
)


export default Section;