import { Workshop } from './workshop';

export class Participant {
    
    public id :number;    
    public name :string;
    public surname :string;
    public organization :string;
    public ico:number;
    public workshop: Workshop;
    
    constructor() {
        this.id = null;
        this.name = "";
        this.surname = "";
        this.organization = "";
        this.ico = null;
    }
}