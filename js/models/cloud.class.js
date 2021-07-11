class Cloud extends MovableObject{

    y = 20;
    height = 250;
    width = 500;

    constructor(){

        super().loadImage('img/5.Fondo/Capas/4.nubes/2.png');
        
        this.x = Math.random() * 500;
        this.y = 50;
        this.width = 500;
        this.height = 250;
        
    
    }


}