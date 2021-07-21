class MovableObject extends DrawableObject{

    currentImage = 0;
    speed = 0.18;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    applyGravity(){
        setInterval(() => {
            if (this.AboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            
        }, 1000 / 25);

    }

    AboveGround(){
        
        if(this instanceof ThrowObjects){

            return true;

        } else {
            
            return this.y < 130;

        }    

    }

    

    isColliding(mo){

        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;

    }

    hit(){

        this.energy -= 5;
        if (this.energy < 0 ) {
            
            this.energy = 0;
        } else {

            this.lastHit = new Date().getTime();


        }

    }

    hurt(){

        let timepassed = new Date().getTime() - this.lastHit; 
        timepassed = timepassed / 1000;
        return timepassed < 1;


    }

    dead(){

        return this.energy == 0;


    }

    playAnimation(images){

        //walkanimation
        let i = this.currentImage % images.length;
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