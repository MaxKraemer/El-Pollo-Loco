class BottleBar extends StatusBar {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
    ];
    percentage = 0;

    constructor() {
        super().loadImage('../img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png');
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 60;
        this.width = 210;
        this.height = 50;

        this.setPercentage(0);
    }

    resolveImageIndex() {
        if (this.percentage == 5) {
            return 5;
        } else if (this.percentage >= 4) {
            return 4;
        } else if (this.percentage >= 3) {
            return 3;
        } else if (this.percentage >= 2) {
            return 2;
        } else if (this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }
}