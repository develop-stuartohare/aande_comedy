import React, {Component} from 'react';
import classnames from 'classnames';



class InView extends Component {


	constructor(props) {
		super(props);
		this.state ={
			inview:false
		}
	}

	componentDidMount(){
		this.$el = $(this.el).children(":first");
		// this.$el = $(this.el);			

		if(this.props.onInView) {
			
			this.$el.on('inview', (event, inView)=>{				
				this.props.onInView(event, inView);				
			});		
		}
		else {			
			this.$el.on('inview', (event, inview)=>{				
				this.setState({inview})							
			});				
		}
	}

	render(){

		let {inview} = this.state;
		let className = classnames('inview-container', {inview: inview, outview: !inview});

		return (
			<span className={className} ref={el=>this.el=el}>{this.props.children}</span>
		)		
	}

}

export default InView;