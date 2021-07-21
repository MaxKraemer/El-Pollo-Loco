class Character extends MovableObject{

    height = 300;
    width = 150;
    y = 50;
    speed = 20;
    IMAGES_WALKING =[

        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'

    ];

    JUMP_IMAGES =[

        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-39.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/3.Secuencia_salto/J-40.png'


    ];

    IMAGES_DEAD =[

        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/5.Muerte/D-57.png'

    ];

    IMAGES_HURT =[

        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/4.Herido/H-43.png'

    ];

    world;
    running_sound = new Audio('audio/running.mp3');

    currentImage = 0;

    constructor(){

        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.JUMP_IMAGES);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    
    }

    animate(){

        setInterval(() => {
            
            this.running_sound.pause();
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
                this.running_sound.play();

            }
            
            
            if(this.world.keyboard.LEFT && this.x > 0) {

                this.moveLeft();
                this.otherDirection = true;
                this.running_sound.play();
    
                }

            if (this.world.keyboard.SPACE && !this.AboveGround()) {

                this.jump();
            }

            this.world.camera_x = -this.x + 100;    

        }, 2000/60);



        setInterval(() => {


            if (this.dead()) {
            
                this.playAnimation(this.IMAGES_DEAD);
            } 
            
            else if (this.hurt()) {
                this.playAnimation(this.IMAGES_HURT);
            
            }
            if (this.AboveGround()) {
                
                this.playAnimation(this.JUMP_IMAGES);
            } 
            
            else {

                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                this.playAnimation(this.IMAGES_WALKING);

            }
            }

        }, 50);

        

        
    }

   
    jump(){

        this.speedY = 30;

    }

}