class Dado{
    constructor (lados){
        this.lados=lados
    }

    lanzar (){
        return Math.floor(Math.random()*(7-1))+1
    }
    get lados(){
        return this.lados;
    }
}
export default Dado