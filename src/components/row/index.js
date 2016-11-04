import React from 'react';
import classnames from 'classnames';
import './row.less';


export default props => {
	let className = classnames('row', props.className);

	return (
		<div className={className}>
			<div className="row-inner">
				{props.children}
			</div>	
		</div>
	)
}