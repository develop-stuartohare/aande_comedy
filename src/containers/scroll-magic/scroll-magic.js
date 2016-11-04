import React, {Component} from 'react';
// import ScrollMagic from 'scrollmagic';
import controller from './scroll-controller';


export default (animations= ()=>{})=>{

	return WrappedComponent =>{

		class ScrollMagicContainer extends Component {

			componentDidMount() {				
				animations(ScrollMagic.Scene, controller, this.el);
			}

			render(){
				return <span className="sm-controller" ref={el=>this.el=el}><WrappedComponent  {...this.props} smController={controller} /> </span>
			}			
		}

		return ScrollMagicContainer;
	}

}


// class ScrollMagicContainer extends Component {

// 	constructor(){
// 		super(...arguments);
// 		this.controller = smController;		
// 	}


// 	render(){
// 		return <span className="sm-container" ref={el=>this.el=el}>{this.props.children}</span>;
// 	}
// }


// export default ScrollMagicContainer;