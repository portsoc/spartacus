"strict mode";

var findSpartacus = function() {
	document.dispatchEvent(
		new CustomEvent(
			'findSpartacus'
		)
	);
};

document.querySelector("button").addEventListener('click', findSpartacus);
