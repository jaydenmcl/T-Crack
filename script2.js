pnckey = "=" //Key used for quickly replacing the tab with a school-safe oneq

document.onkeydown=(e)=>{
	console.log('Keydown');
	switch(e.key) {
		case pnckey:e.preventDefault();
		e.stopPropagation();
		replace('https://classroom.google.com/h');
	}
}
