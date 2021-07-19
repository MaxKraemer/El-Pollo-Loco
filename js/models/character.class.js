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
    running_sound = new Audio('audio/running.mp3');

    currentImage = 0;

    constructor(){

        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    
    }

    animate(){

        setInterval(() => {
            
            this.running_sound.pause();
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {

            this.x += this.speed;
            this.otherDirection = false;
            this.running_sound.play();

            }
            
            
            if(this.world.keyboard.LEFT && this.x > 0) {

                this.x -= this.speed;
                this.otherDirection = true;
                this.running_sound.play();
    
                }

            this.world.camera_x = -this.x + 100;    

        }, 2000/60);



        setInterval(() => {

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

            this.playAnimation(this.IMAGES_WALKING);

            }
            
        }, 50);

        

        
    }

   
    jump(){



    }

}