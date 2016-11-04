import React, {Component, PropTypes} from 'react';
import $ from 'jquery'

class Scroll extends Component {

	constructor(){
		super(...arguments);

		this.state = {
			style:{}
		}
	}

	componentDidMount() {		
		
		this.context.registerOnScroll(this.tick.bind(this))			
		this.childEl = $(this.el).children(":first")[0];
	}

	tick(scrollTop){	

		let {y, start=0, end=100000} = this.props;
		if(scrollTop < start || scrollTop > end) return;		

		let newY = scrollTop * -(y);	
	
		this.childEl.style.transform = `translateY(${newY}px)`					
	}

	render(){
				
		return <span className="scroll-container" ref={el=>this.el=el}>{this.props.children}</span>		
	}
}

Scroll.contextTypes = {
	registerOnScroll: PropTypes.func,
	scrollDisabled: PropTypes.bool,
};

export default Scroll;