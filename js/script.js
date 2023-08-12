const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
   
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump);

var stylesheet = document.styleSheets[1]
var fadeOutRule_To = stylesheet.cssRules[0];

var interval;
var pipePosition;
var marioPosition;

function autoroll() {
    
    interval = setInterval(() => {
        pipePosition = pipe.offsetLeft;
        marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './imagens/game-over.png';
            mario.style.width = '70px'
            mario.style.marginLeft = '50px'

            stop();
        }

    }, 10);
}

// Parar o setInterval
function stop() {
    clearInterval(interval);
}


document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {       
        autoroll()
        console.log("I:", interval);

        mario.style.width = '170px'
        mario.src = './imagens/mario.gif';
        mario.style.marginLeft = '50px'

        pipe.style = fadeOutRule_To.cssText
        mario.style.bottom = 0
    }
});




autoroll()




// Iniciar frame

