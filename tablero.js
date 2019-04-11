class tablero{
    constructor(){

        this.status = false;
        this.lastWiner = null;
        this.casillas[100];
        for(i=1;i<=100;i++){
            casillas[i]=i;
        }
    }
    avanzar(dado,tablero){
        this.pos+=dado.avanzar();
        if(this.pos<100){
            
        }
    }
    play(jugador,dado){
        if(this.status){
            jugador.movr(dice)
            this.accion.snake(jugador.posicion,jugador);
            this.action.ledder(jugador.posicion,jugador);
            this.winer(jugador);
        }
    }
    winer(jugador){
        if(jugador.getPosition() == 100){
            console.log("Nice You win");
            this.lastWiner = jugador
        }

}