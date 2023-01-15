export type CharacterModel = {
    name: string;
    family: string;
    age: number;
    message: string;
    imageUrl: string;
    state: boolean;
};

interface Person {
    report: () => void;
    death: () => void;
}

export class CharacterClass implements CharacterModel, Person {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    state: boolean;
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public imageUrl: string,
        public message: string
    ) {
        this.id = CharacterClass.generateId();
        this.state = true;
    }
    report() {
        return this.message;
    }
    death() {
        this.state = false;
    }
}
