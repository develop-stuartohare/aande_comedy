import React, {Component} from 'react';
import Container from '../container';
// import $ from 'jquery';

import './navigation.less';

class Navigation extends Component {

	componentDidMount() {		
		$(this.navc).height($(this.nav).height())
	}

	render(){
		return (
			<div className="nav-container" ref={nav=>this.navc=nav}>
				<nav className="nav" ref={nav=>this.nav=nav}>
					<Container>
						<ul className="nav-items">
							{this.props.children}
						</ul>
					</Container>
				</nav>	
			</div>		
		)			
	}
}



class NavigationItem extends Component {

	onClick(e){
		
		e.preventDefault();
		$(this.props.href).velocity("scroll", { duration: 2000 });
	}

	render(){

		return (
			<li className="nav-item">
				<a className="nav-item-inner" ref={el=>this.el=el} href={this.props.href} onClick={this.onClick.bind(this)}>
				{this.props.label}
				</a>
			</li>			
		)
	}
}


Navigation.Item = NavigationItem;

export default Navigation;

