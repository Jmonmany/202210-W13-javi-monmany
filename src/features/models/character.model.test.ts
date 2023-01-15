import { CHARACTER } from '../data/mock.character';
import { CharacterClass } from './character.model';

describe('Given "CHARACTER" data model', () => {
    test('Then it should instantiate a CHARACTER', () => {
        const mockCharacter = CHARACTER;
        expect(mockCharacter).toBeInstanceOf(CharacterClass);
        expect(mockCharacter).toHaveProperty('name', CHARACTER.name);
        expect(mockCharacter).toHaveProperty('imageUrl', CHARACTER.imageUrl);
        expect(mockCharacter).toHaveProperty('speed', CHARACTER.message);
        expect(mockCharacter).toHaveProperty('endurance', CHARACTER.age);
        expect(mockCharacter).toHaveProperty('creationDate', CHARACTER.family);
        expect(mockCharacter).toHaveProperty('creationUser', CHARACTER.state);
    });
});
