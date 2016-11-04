import React, {PropTypes} from 'react';

import './modal.less';

const Modal = props => {

	// let children =React.cloneElement(props.children, {...props});
	let {children, onClose} = props;
	return (
		<div className="modal" disabled={!props.show}>
			<div className="modal-blanker" onClick={onClose}/>
			<div className="modal-content-container">					
				<div className="modal-content">
					<div className="modal-close" onClick={onClose}>CLOSE</div>
					{children}
				</div>
			</div>
			
		</div>
	)
}

Modal.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func.isRequired
}

Modal.defaultProps = {
	show: false
}

export default Modal;