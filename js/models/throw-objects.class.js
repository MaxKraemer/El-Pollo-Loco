class ThrowObjects extends MovableObject{

    constructor(x, y){

        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.x = x;
        this.y = y;
        this.height = 90;
        this.throw();
    }

    throw(){
        
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {

            this.x += 25;

        }, 50);
    }

}