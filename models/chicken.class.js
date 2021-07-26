class Chicken extends MovableObject {


    width = 80;
    height = 80;
    energy = 5;

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/Muestra_herida_y_muerte.gif'
    ];

    
   
    


    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 700 + Math.random() * 1700;
        this.y = 360;
        this.speed = 0.3 + Math.random() * 0.7;

        this.animate();
    }

    animate() {

        setInterval(() => {

            
            
            if (!this.isDead()) {
                this.moveLeft();
                
            } else if (this.isDead()) {
                setTimeout(() => {
                    this.loadImage(this.IMAGES_DEAD);
                }, 100);
            }
        }, 1000 / 60);

        setInterval(() => {


            this.playAnimation(this.IMAGES_WALKING);

        }, 1000 / 5);
    }





}

