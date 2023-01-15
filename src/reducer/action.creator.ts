import { CharacterClass } from '../features/models/character.model';
import { characterActionTypes } from './action.types';

export type CharacterAction = {
    type: string;
    payload: Array<CharacterClass> | CharacterClass | CharacterClass['id'];
};

export const characterLoadCreator = (
    payload: Array<CharacterClass>
): CharacterAction => ({
    type: characterActionTypes.load,
    payload,
});

export const characterAddCreator = (payload: CharacterClass): CharacterAction => ({
    type: characterActionTypes.add,
    payload,
});

export const characterUpdateCreator = (payload: CharacterClass): CharacterAction => ({
    type: characterActionTypes.update,
    payload,
});

export const characterDeleteCreator = (
    payload: CharacterClass['id']
): CharacterAction => ({
    type: characterActionTypes.delete,
    payload,
});
