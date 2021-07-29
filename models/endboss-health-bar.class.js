class EndbossHealth extends StatusBar {
    
    //Images Health Array
    IMAGES = [
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png',
        'img/7.Marcadores/Marcadorvida_enemy/Azul.png',
        'img/7.Marcadores/Marcadorvida_enemy/Naranja.png'
    ];

    //load Endboss Images
    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Marcadorvida_enemy/Naranja.png');
        this.loadImages(this.IMAGES);

        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 40;
        this.setPercentage(20);//healt endboss

    }

    resolveImageIndex() {
        if (this.percentage == 20) {
            return 2;
        } else if (this.percentage > 5) {
            return 1;
        } else {
            return 0;
        }
    }
}