class MovableObject{

    x = 120;
    y = 285;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.18;


    loadImage(path){

        this.img = new Image(); // this.img = document.getElementById('image');
        this.img.src = path;

    }

    loadImages(arr){

        arr.forEach((path) => {

            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });
    }


    moveRight() {

        console.log('Moving right');
        
    }

    moveLeft() {

        setInterval(() => {

            this.x -= 0.15;


        },1000/60);


    }
}