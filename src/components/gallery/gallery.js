import React, {PropTypes, Component} from 'react';

import Image from '../image';
import Float from '../float';

import './gallery.less';

export const Gallery = props =>(
	
	<Float.Group className={`gallery ${props.className || ""}`}>
		{props.children}
	</Float.Group>
)

const Sidebar = props =>(
	<Float.Left className="gallery-sidebar"> 		
		{props.children}		
	</Float.Left>
)

const Thumb = props =>{

	let onClick = (e)=>{
		e.preventDefault();
		props.onClick(props);
	}

	return (
		<a href="#" className={`gallery-thumb ${props.active? "active":""}`} onClick={onClick}>
			<Image src={props.src}/>
		</a>		
	)
}


const Title = props =>(
	<div className="gallery-main-item-title">
		<h1>{props.children}</h1>
	</div>
)

const Main = props =>(
	<Float.Left className="gallery-main">		
		{props.children}		
	</Float.Left>
)

const Item = props =>(
	<div className={`gallery-item ${props.visible ? "active":"inactive"}`}>
		{props.children}
	</div>
)

const Media = props =>(
	<div className={`gallery-media`}>
		{props.children}
	</div>
)

const Description = props =>(
	<div className={`gallery-description`}>
		<div className={`gallery-description-inner`}>
		{props.children}
		</div>
	</div>
)

Gallery.Sidebar = Sidebar;
Gallery.Thumb = Thumb;
Gallery.Main = Main;
Gallery.Item = Item;
Gallery.Media = Media;
Gallery.Title = Title;
Gallery.Description = Description;


export default Gallery;