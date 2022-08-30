let OOOO=new Audio('/sounds/lukiOOOO.mp3');

class Ball{
    constructor(lukiWidth, lukiHeight)
    {
        this.image=document.getElementById('luki');
        this.width=lukiWidth;
        this.height=lukiHeight;
        this.speed={x:-5, y:-5};
        this.size=75;
        this.positionX=500;
        this.positionY=500;
    }
    draw(ctx)
    {
        ctx.drawImage(this.image, this.positionX, this.positionY, this.size, this.size);
    }
    update(dt)
    {
        this.positionX+=this.speed.x;
        this.positionY+=this.speed.y;
        if(this.positionX+this.size>=this.width||this.positionX<0)
        {
            this.speed.x=-this.speed.x;

        }
        if(this.positionY+this.size>=this.height||this.positionY<0)
        {
            this.speed.y=-this.speed.y;
            
        }
        if
        (
            this.positionX==0&&this.positionY==0||
            this.positionX==this.width&&this.positionY==0||
            this.positionX==0&&this.positionY==this.height||
            this.positionX==this.width&&this.positionY==this.height
        )
        {
            OOOO.play();
        }
    }
}
export default Ball;


