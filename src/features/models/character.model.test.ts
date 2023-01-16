import { CHARACTER } from '../data/mock.character';
import { CharacterClass } from './character.model';

describe('Given "CHARACTER" data model', () => {
    test('Then it should instantiate a CHARACTER', () => {
        const mockCharacter = CHARACTER;
        expect(mockCharacter).toBeInstanceOf(CharacterClass);
        expect(mockCharacter).toHaveProperty('name', CHARACTER.name);
        expect(mockCharacter).toHaveProperty('imageUrl', CHARACTER.imageUrl);
        expect(mockCharacter).toHaveProperty('message', CHARACTER.message);
        expect(mockCharacter).toHaveProperty('age', CHARACTER.age);
        expect(mockCharacter).toHaveProperty('family', CHARACTER.family);
        expect(mockCharacter).toHaveProperty('state', CHARACTER.state);
        expect(mockCharacter).toHaveProperty('death', CHARACTER.death);
    });
    test('Then it call death function', () => {
        const mockCharacter = CHARACTER;
        mockCharacter.death();
        expect(mockCharacter.state).toBe(false);
    });
});
