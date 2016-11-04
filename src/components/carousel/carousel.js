import React, {Component, PropTypes} from 'react';

import './carousel.less';

export const CarouselItem = props => (

	<div className="carousel-item" style={{width:props.width}}>
		{props.children}
	</div>	
)


class Carousel extends Component {

	constructor(){
		super(...arguments);

		this.onNext = this.onNext.bind(this);
		this.onBack = this.onBack.bind(this);
		this.isMobile = $(window).width()<1024;

		this.state = {
			width:"auto",
			currentSlide:0			
		}
	}

	onNext(e){
		e.preventDefault();
		this.onSlideToIndex(this.state.currentSlide +1);
	}

	onBack(e){		
		e.preventDefault();
		this.onSlideToIndex(this.state.currentSlide -1);
	}

	onSlideToIndex(idx){
		
		if(idx < 0 || idx >= this.props.children.length) return;

		this.setState({currentSlide:idx});
	}


	render (){
		
		let {currentSlide} = this.state;
		let {width, children} = this.props;

		width = this.isMobile? 320: width;


		let sliderPosition = -(currentSlide * width);		

		let childrenWithProps = children.map((child, idx)=>{
			return React.cloneElement(child, {width, key: idx});
		})		
			
		return (
			<div className="carousel" ref={el=>this.el=el}>					
				
				<div className="carousel-widget" style={{width}}>
					<div className="carousel-viewport">
						<div className="carousel-slider" style={{transform:`translateX(${sliderPosition}px)`}}>
							{childrenWithProps}
						</div>
					</div>
					
					<a href="#" className="carousel-control carousel-control-back" onClick={this.onBack} disabled={currentSlide==0}><div className="icon carousel-control-back-icon"/></a>
					<a href="#" className="carousel-control carousel-control-next" onClick={this.onNext} disabled={currentSlide==children.length-1}><div className="icon carousel-control-next-icon"/></a>	
					
				</div>						
			</div>
		)
	}
}

Carousel.propTypes = {
	width: PropTypes.number.isRequired,
}

Carousel.defaultProps = {
	width: 520
}

export default Carousel;