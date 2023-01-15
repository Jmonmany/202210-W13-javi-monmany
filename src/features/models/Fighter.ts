import { CharacterClass } from './character.model';

export class Fighter extends CharacterClass {
    constructor(
        name: string,
        family: string,
        age: number,
        message: string,
        imageUrl: string,
        public weapon: string,
        public dexterity: number
    ) {
        super(name, family, age, imageUrl, message);
        message = 'First I hit and then I ask';
    }
}
