var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Alejandro Perdomo')
    .pauseFor(2500)
    .deleteAll()
    .start();