class Character extends MovableObject{

    height = 300;
    width = 150;
    y = 140;
    speed = 20;
    IMAGES_WALKING =[

        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'

    ];

    world;


    currentImage = 0;

    constructor(){

        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    
    }

    animate(){

        setInterval(() => {

            if(this.world.keyboard.RIGHT) {

            this.x += this.speed;
            this.otherDirection = false;

            }

            if(this.world.keyboard.LEFT) {

                this.x -= this.speed;
                this.otherDirection = true;
    
                }

            this.world.camera_x = -this.x;    

        }, 2000/60);



        setInterval(() => {

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

            //walkanimation
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;

            }
            
        }, 50);

        

        
    }

   
    jump(){



    }

}