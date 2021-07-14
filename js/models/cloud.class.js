class Cloud extends MovableObject{

    y = 20;
    height = 250;
    width = 500;

    constructor(){

        super().loadImage('img/5.Fondo/Capas/4.nubes/2.png');
        
        this.x = Math.random() * 500;
        this.animate();

    }

    animate(){
        
       this.moveLeft();


    }

    moveLeft(){

        setInterval(() => {

            this.x -= 0.15;


        },1000/60);


    }

}