//Variables
const app = document.getElementById('app');



const typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Alejandro Perdomo')
    .pauseFor(2500)
    .deleteAll()
    .start();
