class GameOver extends DrawableObject {
    IMAGE_GAMEOVER = [
        '../img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png'
    ];

    IMAGE_LOOSE = [
        '../img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png'
    ];

    x = 0;
    y = 0;
    width = 720;
    height = 480;

    constructor() {
        super();
        this.loadImage(this.IMAGE_GAMEOVER);
        this.loadImage(this.IMAGE_LOOSE);
    }
}