var respond = function (e) {

	setTimeout(
		function() {
		    responses.textContent += "Slave says:     I'm Spartacus!\n";
		},
		Math.random()*5000
	)
};

for (var i=0; i< 100; i++) {
	document.addEventListener('findSpartacus', 
		function() {
			respond();
		}
	);
}
