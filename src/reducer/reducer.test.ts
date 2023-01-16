import { mockCharacter1, mockCharacter2, mockCharacters } from '../hooks/testing.mock';
import { CharacterClass } from '../features/models/character.model';
import { CharacterAction } from './action.creator';
import * as ac from './action.creator';
import { characterReducer } from './reducer';
import { jaime } from '../features/models/characters';
import { Fighter } from '../features/models/Fighter';

describe('Given the reducer', () => {
    let state: Array<CharacterClass>;
    let action: CharacterAction;

    describe('When the action type is "characters@load"', () => {
        test('Then it should return as state the loaded data', () => {
            state = [];
            action = ac.characterLoadCreator(mockCharacters);
            const result = characterReducer(state, action);
            expect(result).toEqual(mockCharacters);
        });
    });

    describe('When the action type is "characters@add"', () => {
        test('Then it should return the state with the data added', () => {
            state = [mockCharacter1];
            action = ac.characterAddCreator(mockCharacter2);
            const result = characterReducer(state, action);
            expect(result).toEqual([mockCharacter1, mockCharacter2]);
        });
    });

    describe('When the action type is "characters@update"', () => {
        test('Then it should return the state with th data updated', () => {
            const updateCharacter: Fighter = {
                ...jaime,
                age: 50,
                report: function (): string {
                    throw new Error('Function not implemented.');
                },
                death: function (): void {
                    throw new Error('Function not implemented.');
                }
            }
            state = [jaime, mockCharacter2];
            action = ac.characterUpdateCreator(updateCharacter);
            const result = characterReducer(state, action);
            expect(result).toEqual([updateCharacter, mockCharacter2]);
        });
    });

    describe('When the action type is "characters@delete"', () => {
        test('Then it should return the state without the data deleted', () => {
            state = [mockCharacter1];
            action = ac.characterDeleteCreator(mockCharacter1.id);
            const result = characterReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('When the action type is not valid', () => {
        test('Then it should return the state', () => {
            state = [];
            action = { type: 'Bad', payload: 'Test' };
            const result = characterReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
