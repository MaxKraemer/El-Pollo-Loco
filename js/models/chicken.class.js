class Chicken extends MovableObject {

    y = 325;
    height = 110;
    

    constructor(){

        super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        
        this.x = 200 + Math.random() *500;
        this.animate();
    
    }

    animate(){
        
        setInterval(() => {

            this.x -= 0.15;



        },1000/60);

    }




}