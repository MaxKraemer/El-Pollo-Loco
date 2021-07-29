class Coin extends CollectableObject {
    
    width = 150;
    height = 150;
    y = 20;

    IMAGES = [
        
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
        
    ];

    

    constructor(x, y) {

        super().loadImage('img/8.Coin/Moneda1.png');
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