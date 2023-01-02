class Ghost {

    lifePoints:number;
    attackValue:number;
    speedPoints:number
    constructor( lifePoints: number, attackValue: number, speedPoints:number ){

        this.lifePoints = lifePoints;
        this.attackValue = attackValue;
        this.speedPoints = speedPoints;

    }

    getLifePoints() {
        return this.lifePoints;
    }
    getAttackValue() {
        return this.attackValue;
    }

}

class Pacman extends Ghost {

    invincible:boolean;

    constructor (lifePoints:number, attackValue:number, speedPoints:number, invincible:boolean) {
        super(lifePoints, attackValue, speedPoints);

        this.invincible = invincible; //can be true or false depending on the powerup
    }


    }

