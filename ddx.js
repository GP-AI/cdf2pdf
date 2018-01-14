
	// For computing derivatives


	function derive(xs, ys){
		var derivs = [];
		ys.unshift(ys[0] - (ys[1] - ys[0]));
		ys.push(ys[ys.length - 1] - (ys[ys.length -1] - ys[ys.length - 2]));
		// Pad first and last values of our function to make derivs easier
		for (i = 0; i < xs.length; i++){
			derivs.push((ys[i+2] - ys[i])/50); 
		}
		return derivs;
	}

