import { Felino } from "./Felino";

class Leao extends Felino{
    public name : string

    constructor (name :string){
        super()
        this.name = name
    }
    public emitSound(sound: string): void {
        console.log(`Leão emite ${sound}`);
    }

    public caca (presa : string): void;
    public caca (presa : string, qtdPresas : number): void
    public caca (presa : string, qtdPresas : number, tipoPressa : string): void

    public caca (presa : string, qtdPresas? : number, tipoPressa? : string): void {
        if(tipoPressa != undefined){
            console.log(`Leão está caçando um ${tipoPressa}`);
        }
        const numPressa = (qtdPresas == undefined)? 1: qtdPresas
        console.log(`Leão esta caçando ${numPressa} ${presa}`)
    }
}

export { Leao }