class Jugador{
    constructor (){
        this.position=null;
    }

    setPosition(position){
        this.position=position;
    }

    getPosition(){
        return this.position;
    }

    mover(dado){
        position+=dado;
    }
}

export default Jugador;