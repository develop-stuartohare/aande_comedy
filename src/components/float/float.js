import React, {PropTypes} from 'react';

import './float.less';


const Group = props =>(
	<div className={`float-group ${props.className || ""}`}>{props.children}</div>
)
const Left= props =>(
	<div {...props} className={`float-left ${props.className || ""}`} >{props.children}</div>
)

const Right = props =>(
	<div className={`float-right ${props.className || ""}`}>{props.children}</div>
)

const None = props =>(
	<div className={`float-none ${props.className || ""}`}>{props.children}</div>
)


export default {
	Group,
	Left,
	Right,
	None
}
