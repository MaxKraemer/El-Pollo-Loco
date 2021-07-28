class Cloud extends MovableObject {
    y = 20;
    height = 250;


    constructor() {
        super().loadImage('../img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 2500;
        this.width = 500;


        this.animate();
    }
    
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 25);
    }
}