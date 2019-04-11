 class jugador{
     constructor(){
        this.position=null;
     }
     setPosition(position){
        this.position = position;
    }
    getPosition(){
        return this.position
    }
    move(dice){
        this.position += dice;
    }
 }