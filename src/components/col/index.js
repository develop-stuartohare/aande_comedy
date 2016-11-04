import React from 'react';
import classnames from 'classnames';
import './col.less';


export default props => {
	let className = classnames('col', props.className);
	let width = props.width ? props.width+'%': 'auto';

	return (
		<div className={className} style={{width}}>
			<div className="col-inner">
				{props.children}
			</div>	
		</div>
	)
}