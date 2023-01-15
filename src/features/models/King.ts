import { CharacterClass } from './character.model';

export class King extends CharacterClass {
    constructor(
        name: string,
        family: string,
        age: number,
        message: string,
        imageUrl: string,
        public yearsOfReign: number
    ) {
        super(name, family, age, imageUrl, message);
        message = 'You are all going to die';
    }
}
