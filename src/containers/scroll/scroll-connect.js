import React, {Component, PropTypes} from 'react';

import animateElement from './animate-element';

export default (options={}) =>{

	return WrappedComponent =>{

		class ScrollContainer extends Component {

			componentDidMount() {			
	
				this.context.registerOnScroll(this.tick.bind(this))	

				for(let id in options){
					options[id].el = $(id)[0];					
				}				
			}

			tick(scrollTop){	

				for(let id in options){
					if(options[id].el) animateElement(options[id], scrollTop);
				}								
			}		

			render(){				

				return <WrappedComponent  {...this.props}/>
			}			
		}

		ScrollContainer.contextTypes = {
			registerOnScroll: PropTypes.func,
			scrollDisabled: PropTypes.bool,
		};

		return ScrollContainer;
	}

}
