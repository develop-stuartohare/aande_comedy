import fps from './fps';
import $ from 'jquery';

var scrollTop = 0;

export default cb => {

	const update = (time, deltaTime)=>{
		let st = $(window).scrollTop();

		if(st !==scrollTop) cb(st);
		scrollTop = st;
	}
	fps.registerCallback(update);
	fps.start();
}

