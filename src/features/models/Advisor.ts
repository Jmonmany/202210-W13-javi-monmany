import { CharacterClass } from './character.model';

export class Advisor extends CharacterClass {
    constructor(
        name: string,
        family: string,
        age: number,
        message: string,
        imageUrl: string,
        public advising: CharacterClass
    ) {
        super(name, family, age, imageUrl, message);
        message = "I don't know why, but I think I'm going to die soon";
    }
}
