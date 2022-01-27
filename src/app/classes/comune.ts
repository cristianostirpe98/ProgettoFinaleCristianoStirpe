import { Provoncia } from "./provoncia";

export class Comune {
    id?: number;
    nome!: string;
    provincia!: Provoncia;

    constructor() {
        this.nome = '';
        this.provincia = new Provoncia();
    }
}
