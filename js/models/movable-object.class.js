class MovableObject{

    x = 120;
    y = 285;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.18;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;


    applyGravity(){
        setInterval(() => {
            if (this.AboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            
        }, 1000 / 25);

    }

    AboveGround(){

        return this.y < 130;


    }


    loadImage(path){

        this.img = new Image(); // this.img = document.getElementById('image');
        this.img.src = path;

    }

    loadImages(arr){

        arr.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });
    }

    playAnimation(images){

        //walkanimation
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }


    moveRight() {

        this.x += this.speed;
        
        
        
    }

    moveLeft() {

        this.x -= this.speed;
        
        
    }

    jump(){



    }

}