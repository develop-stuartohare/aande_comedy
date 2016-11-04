import React, {PropTypes, Component} from 'react';
import onScroll from './onScroll';
import Animatable from './animatable';
import _ from 'underscore';

import './scroll.less';

class ScrollProvider extends Component {

	constructor(props) {
		super(props);
		this.listeners = [];
		this.state = {
			scrollTop: 0
		}
	}
	getChildContext() {

		return {
			registerOnScroll: this.onRegister.bind(this),
			scrollDisabled: this.props.disabled,
		};
	}

	onRegister(cb){
		this.listeners.push(cb);
	}
	componentDidMount() {

		if(this.props.disabled) return;
		onScroll(this.updateListeners.bind(this));	
		this.updateListeners($(window).scrollTop())
	}

	updateListeners(scrollTop){
		
		if(this.props.disabled) return;

		for(var i=0;i<this.listeners.length;i++){
			this.listeners[i](scrollTop);
		}

		if(this.props.debug){
			this.setState({scrollTop})
		}
	}

	renderDebug(){
		if(!this.props.debug) return null;

		return (
			<div className="scroll-provider-debug">			
				<div className="scroll-provider-debug-inner">
					{this.state.scrollTop}
				</div>
			</div>
		)
	}

	render(){
		if(this.props.disabled) return this.props.children;
		return (
			<span className="scroll-provider scroll">
				{this.renderDebug()}
				{this.props.children}				
			</span>
		)
	}
}


ScrollProvider.childContextTypes = {
  	registerOnScroll: PropTypes.func,
  	scrollDisabled: PropTypes.bool
}

export default ScrollProvider;