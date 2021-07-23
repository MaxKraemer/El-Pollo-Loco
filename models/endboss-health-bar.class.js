class EndbossHealth extends StatusBar {

    IMAGES = [
        'img/7.Marcadores/Marcadorvida_enemy/Vede.png',
        'img/7.Marcadores/Marcadorvida_enemy/Azul.png',
        'img/7.Marcadores/Marcadorvida_enemy/Naranja.png'
    ];

    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Marcadorvida_enemy/Naranja.png');
        this.loadImages(this.IMAGES);

        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 40;
        this.setPercentage(15);
    }

    resolveImageIndex() {
        if (this.percentage == 15) {
            return 2;
        } else if (this.percentage > 5) {
            return 1;
        } else {
            return 0;
        }
    }
}