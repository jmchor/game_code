class Player {
    name:string;
    species:string;
    hp:number;
    mp:number;
    constructor(name: string, species: string, hp: number, mp: number) {
        this.name = name;
        this.species = species;
        this.hp = hp;
        this.mp = mp;
    }
    getName() {
        return this.name;
    }
    getHp() {
        return this.hp;
    }
    getmp() {
        return this.mp;
    }

}