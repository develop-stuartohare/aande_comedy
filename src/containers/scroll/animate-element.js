
// const calcY = (params, scrollTop)=>{

// 	let {y} = params;
// 	if(!y) return 0;	

// 	if(typeof y === 'number') return scrollTop * -(y);
	
// 	let {start, end, ratio=1, offset=0} = y;

// 	if(scrollTop < offset) return start
// 	// let newY = start + ((scrollTop-offset)* -(ratio));
// 	let newY = start + ((scrollTop * -(ratio)));

// 	newY = Math.min(newY, start)
// 	newY = Math.max(newY, end)

// 	return newY;		
// }
const calcY = (params, scrollTop)=>{

	let {y} = params;	

	if(!y) return 0;

	if(typeof y === 'number') return scrollTop * -(y);
	
	let {start, end, ratio=1, offset=0} = y;

	scrollTop = scrollTop - offset;
	if(scrollTop <0) return start;


	let newY;

	let dir = (start - end) < 0 ? 1: -1;	
	
	if(dir ==1){
		newY = start + (scrollTop * ratio);
	}
	else {
		newY = start - (scrollTop * ratio);	
	}

	let min = Math.min(start, end);
	let max = Math.max(start, end);

	if(newY < min) return min;
	if(newY > max) return max;

	return newY;		
}


const calcX = (params, scrollTop)=>{

	let {x} = params;	

	if(!x) return 0;

	if(typeof x === 'number') return scrollTop * -(x);
	
	let {start, end, ratio=1, offset=0} = x;

	scrollTop = scrollTop - offset;
	if(scrollTop <0) return start;


	let newX;

	let dir = (start - end) < 0 ? 1: -1;
	
	if(dir ==1){
		newX = start + (scrollTop * ratio);
	}
	else {
		newX = start - (scrollTop * ratio);	
	}

	let min = Math.min(start, end);
	let max = Math.max(start, end);

	if(newX < min) return min;
	if(newX > max) return max;

	return newX;		
}

export default (params, scrollTop)=>{

	let {el} = params;
	let y = calcY(params, scrollTop);		
	let x = calcX(params, scrollTop);		

	params.lastY = y;
	params.lastX = x;

	el.style.transform = `translate(${x}px, ${y}px)`;	
}