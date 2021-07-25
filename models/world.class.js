class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];
    coins = [];
    bottles = [];
    lostGame = false;
    gameOver = false;
    game_sound = new Audio('audio/gameMusic.mp3');
    game_over = new Audio ('audio/gameOver.mp3');
    win_sound = new Audio ('audio/win.mp3');
    chicken_sound = new Audio('audio/chicken.mp3');
    
    
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.run2();
        
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.jumpOnEnemy();
            this.checkIfGameIsOver();
        }, 200);
    }

    run2() {

        setInterval(() => {
            this.checkCollectedObjects(this.level.coins, this.level.bottles);
            this.checkCharacterPosition();
            this.checkIfCharacterIsDead();
            this.checkIfEndbossIsDead()
        }, 1000 / 25);
    }

    checkIfCharacterIsDead() {
        if (this.character.isDead()) {
            setTimeout(() => {
                this.lostGame = true;
                this.game_over.play();
            }, 100);
        }
    }

    checkIfEndbossIsDead() {

        if (this.level.returnEndboss().isDead()) {
            setTimeout(() => {
                this.game_sound.pause();
                this.gameOver = true;
                
                this.win_sound.play();
                
            }, 100);
        }
  
    }

    checkIfGameIsOver() {
        setTimeout(() => {

            if (this.lostGame == true) {
                document.getElementById('lostGame').classList.remove('d-none');
                // document.getElementById('container').classList.remove('d-none');
            } else if (this.gameOver == true) {
                
                
                // document.getElementById('container').classList.remove('d-none');
                document.getElementById('gameOver').classList.remove('d-none');
            }
        }, 100);
     
    }

    checkCharacterPosition() {
        if (this.character.x == this.level.level_end_x - 200) {
            this.characterReachCheckpoint = true;
           
        }
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollectedObjects(coins, bottles) {
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            if (this.character.isColliding(coin)) {
                this.coins.push(coin);
                coins.splice(i, 1);
                this.coinBar.setPercentage(this.coins.length);
            }
        }
        for (let i = 0; i < bottles.length; i++) {
            const bottle = bottles[i];
            if (this.character.isColliding(bottle)) {
                this.bottles.push(bottle);
                bottles.splice(i, 1);
                this.bottleBar.setPercentage(this.bottles.length);
            }
        }
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let throwableBottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);

            if (this.bottles.length > 0) {
                this.throwableObjects.push(throwableBottle);
                this.bottles.splice(0, 1);
                this.bottleBar.setPercentage(this.bottles.length);
            }
        }
        this.checkThrowedCollision();
    }


    checkThrowedCollision() {
        for (let i = 0; i < this.throwableObjects.length; i++) {
            const throwableObject = this.throwableObjects[i];
            if (throwableObject.isColliding(this.level.returnEndboss())) {
                this.level.returnEndboss().hit();
                this.bottleBar.setPercentage(this.bottles.length);
                this.throwableObjects.splice(0, 1);
            }
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                this.character.hit();
                this.healthBar.setPercentage(this.character.energy);
            }
        })
    }

    jumpOnEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                let index = this.level.enemies.indexOf(enemy);
                this.level.enemies.splice(index, 1);

            }
        });
    }

    draw() {
        
        this.game_sound.play();
        this.chicken_sound.play();
        
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        // ------------Space for fixed Objects-----------
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);

        this.ctx.translate(this.camera_x, 0);

        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });

        
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}