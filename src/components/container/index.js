import React from 'react';
import classnames from 'classnames';
import './container.less';

export default props => {
	let classNames = classnames('container', props.className, {'container-small': props.small})
	return (
		<div className={classNames}>
			{props.children}
		</div>
	)
}