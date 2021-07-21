class World {


    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwObject = [];



    constructor(canvas, keyboard){
        
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();


    }

    setWorld(){

        this.character.world = this;

    }


    run(){

        setInterval(() => {

            this.checkCollisions();
            this.checkThrowObjects();
            
        
        }, 200);
    }

    checkThrowObjects(){

        if (this.keyboard.D) { 
            
            let bottle = new ThrowObjects(this.character.x + 100, this.character.y +100);
            this.throwObject.push(bottle);
            
        }
    }

    

    checkCollisions(){

        this.level.enemies.forEach((enemy) => {

            if (this.character.isColliding(enemy)) {
            
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
            
        }
        })
    }


    draw(){
        
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.throwObject);
        
        this.ctx.translate(-this.camera_x, 0);
        


        let self = this;
        requestAnimationFrame(function () {
            
            self.draw();
        });

    }

        addObjectsToMap(objects){

            objects.forEach(o => {

                this.addToMap(o);
    
            });  
    }

       addToMap(mo){

        if (mo.otherDirection) {
            
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        
        
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }

        

    }
}