import { CharacterClass } from './character.model';
import { Fighter } from './Fighter.js';

export class Squire extends CharacterClass {
    constructor(
        name: string,
        family: string,
        age: number,
        message: string,
        imageUrl: string,
        public serving: Fighter,
        public degreeOfSuckingUp: number
    ) {
        super(name, family, age, imageUrl, message);
        message = "I'm a loser";
    }
}
