class Coin extends CollectableObject {
    
    width = 130;
    height = 130;

    IMAGES = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda2.png');
        this.loadImages(this.IMAGES);

        this.y = y;
        this.x = x;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 100);
    }
}