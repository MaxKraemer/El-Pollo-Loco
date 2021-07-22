class Chick extends MovableObject {

    height = 45;
    width = 45;
    energy = 5;



    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);


        this.x = 600 + Math.random() * 1200;
        this.y = 380;
        this.speed = 1 + Math.random() * 1.5;

        this.animate();

    }

    animate() {
        
        setInterval(() => {
            this.otherDirection = this.otherDirection ? false : true;
        }, 5000);
        setInterval(() => {
            if (this.otherDirection) {
                this.x += this.speed;
            }
            else {
                this.x -= this.speed;
            }
        }, 50);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000 / 5);
    }

}