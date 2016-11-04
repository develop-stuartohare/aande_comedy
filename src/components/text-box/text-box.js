import React from 'react';
import './text-box.less';

export default props =>(
	<div className={`text-box ${props.className || ""}`}>
		<div className="text-box-inner">
			{props.children}
		</div>
	</div>	
)