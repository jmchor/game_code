class Ghost {

    lifePoints:number;
    attackValue:number;
    constructor( lifePoints: number, attackValue: number) {

        this.lifePoints = lifePoints;
        this.attackValue = attackValue;
    }

    getLifePoints() {
        return this.lifePoints;
    }
    getAttackValue() {
        return this.attackValue;
    }

}

