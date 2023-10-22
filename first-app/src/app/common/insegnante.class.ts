import { IInsegnante } from "./insegnante.interface";

export class Insegnante implements IInsegnante {
    nome: string;
    cognome: string;
    materie: string[];

    constructor(nome: string, cognome: string, materie: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.materie = materie;
    }
}
