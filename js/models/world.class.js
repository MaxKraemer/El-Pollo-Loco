class World {


    character = new Character();
    enemies = [

    new Chicken(),
    new Chicken(),
    new Chicken(),
    
    ];
    
    clouds = [
        new Cloud()
    ];

    backgroundObjects = [

        new BackgroundObject('img/5.Fondo/1.png', 0, 0)
    ];
    
    canvas;
    ctx;
    keyboard;



    constructor(canvas, keyboard){
        
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();


    }

    setWorld(){

        this.character.world = this;

    }


    draw(){
        
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.backgroundObjects.forEach(backgroundObject => {

            this.ctx.drawImage(backgroundObject.img, backgroundObject.x, backgroundObject.y, backgroundObject.width, backgroundObject.height);

        });


        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);

        this.enemies.forEach(enemy => {

            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);

        });

        this.clouds.forEach(cloud => {

            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);

        });

        


        let self = this;
        requestAnimationFrame(function () {
            
            self.draw();
        });

    }
}