var respond = function (e) {
    setTimeout(
        function() {
            responses.textContent += "Spartacus says: I'm Spartacus!\n";
        },
        Math.random()*5000
    )
};

document.addEventListener('findSpartacus', respond);
