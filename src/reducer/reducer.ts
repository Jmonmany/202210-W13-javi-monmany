import { CharacterClass } from '../features/models/character.model';
import { CharacterAction } from './action.creator';
import { characterActionTypes } from './action.types';
export function characterReducer(
    state: Array<CharacterClass>,
    action: CharacterAction
): Array<CharacterClass> {
    switch (action.type) {
        case characterActionTypes.load:
            return action.payload as Array<CharacterClass>;
        case characterActionTypes.add:
            return [
                ...(state as Array<CharacterClass>),
                action.payload as CharacterClass,
            ];
        case characterActionTypes.update:
            const updateCharacter = action.payload as CharacterClass;
            return (state as Array<CharacterClass>).map((item) =>
                item.id === updateCharacter.id ? updateCharacter : item
            );
        case characterActionTypes.delete:
            const finalId = action.payload as CharacterClass['id'];
            return state.filter((item) => item.id !== finalId);
        default:
            return [...state];
    }
}
