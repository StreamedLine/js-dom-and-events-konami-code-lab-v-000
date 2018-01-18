const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let indexProg = 0;

  document.body.addEventListener('keydown', function(e){
  	const key = parseInt(e.detail || e.location || e.which);

  	if (key === code[indexProg]) {
  		indexProg++;
  		indexProg == code.length ? alert('Good job!!') : false;
  	} else {
  		indexProg = 0;
  	}
  });

}