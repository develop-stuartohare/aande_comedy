import React, {Component} from 'react';

import Image from '../image';
import Inview from '../in-view';
import classnames from 'classnames';

import './image-blanker.less';


class ImageBlanker extends Component {

	constructor(){
		super(...arguments);

		this.state ={
			open: true,
		}
	}

	onBlankerToggle(e){
		e.preventDefault();
		this.setState({open:!this.state.open});
	}

	render(){

		let {src, children} = this.props;
		let {open} = this.state;
		let closeIcon = open ? 'x': '>'
		let blankerClassName = classnames("blanker", {hidden:!open});

		return (
			<div className="image-blanker">
				<Inview>				
					<a href="#" className="blanker-toggle" onClick={this.onBlankerToggle.bind(this)}>{closeIcon}</a>
					<Image src={src}/>
					<div className={blankerClassName}>						
						<div className="image-blanker-content">
							{children}
						</div>
					</div>
				</Inview>
			</div>
		)
	}
}

export default ImageBlanker