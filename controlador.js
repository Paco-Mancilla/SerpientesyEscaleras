import {Casillas} from './casillas.js';
import {Jugador} from './persona.js';
import {Dado} from './dado.js';

var p1=new Jugador;
var p2=new Jugador;
var dado=new Dado;
var tablero=new Casillas;

console.log("Inicio");
console.log("Turno "+0+" Jugador 1:"+p1.getPosition()+"Jugador 2:"+p2.getPosition());

let y=1;
do{
    console.log("------------------------------");
    let da=dado.lanzar();
    if(y&2!=0){
        console.log("Turno"+y+", Jugador1: tiro"+d);
        p1.mover(da);
            if(p1.getPosition()<100){
                if(tablero.getCasillas(p1.getPosition())<0){
                    console.log("Has caido en serpiente, Nueva psicion: "+p1.getPosition());
                }
            else if(tablero.getCasillas(p1.getPosition())>0){
                console.log("Has caido en escalera, Nueva posicion: "+p1.getPosition());
                
            }
            else{
                console.log("Nueva posicion: "+p1.getPosition());
                
            }
                
            }
            else{
                console.log("¡Felicidades has ganado!");
            }
        
    }
    else{
        console.log("Turno"+y+", Jugador2: tiro"+da);
        p2.mover(da);
            if(p2.getPosition()<100){
                if(tablero.getCasillas(p2.getPosition())<0){
                    console.log("Has caido en serpiente, Nueva psicion: "+p2.getPosition());
                }
            else if(tablero.getCasillas(p2.getPosition())>0){
                console.log("Has caido en escalera, Nueva posicion: "+p2.getPosition());
                
            }
            else{
                console.log("Nueva posicion: "+p2.getPosition());
                
            }
                
            }
            else{
                console.log("¡Felicidades has ganado!");
            }
    }


}while(p1.getPosition()==100 || p2.getPosition()==100)