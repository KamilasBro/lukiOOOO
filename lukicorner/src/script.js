import Ball from './ball.js'

let canvas=document.getElementById('lukiScreen');
let ctx=canvas.getContext("2d");


const lukiHeight=910;
const lukiWidth=1800;
let ball = new Ball(lukiWidth, lukiHeight);
var keyClicked=false;
document.addEventListener('keydown', (event) => {
    
    if(keyClicked==false)
    {
        if(event.code=='Space')
        {
            keyClicked=true;
            lukiLoop();
            document.getElementById("info").style.animation="disappear 2s";
            document.getElementById("info").style.opacity="0";
        }
    }
  }, false);
let lastTime=0;
function lukiLoop(timestamp)
{
    let dt=timestamp-lastTime;
    lastTime=timestamp;
    ctx.clearRect(0,0,1800,910);

    ball.draw(ctx);
    ball.update(ctx);
    requestAnimationFrame(lukiLoop);
}
