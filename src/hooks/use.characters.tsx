import { useCallback, useMemo, useReducer, useState } from 'react';
import { CharacterClass } from '../features/models/character.model';
import { CharacterRepo } from '../core/services/repository';
import { characterReducer } from '../reducer/reducer';
import * as ac from '../reducer/action.creator';

export type useCharacterType = {
    getStatus: () => Status;
    getCharacters: () => Array<CharacterClass>;
    handleLoad: () => Promise<void>;
    handleAdd: (character: CharacterClass) => Promise<void>;
    handleUpdate: (characterPayload: Partial<CharacterClass>) => Promise<void>;
    handleDelete: (id: CharacterClass['id']) => Promise<void>;
};

type Status = 'Starting' | 'Loading' | 'Loaded';

export function useCharacter(): useCharacterType {
    const repo = useMemo(() => new CharacterRepo(), []);

    const initialState: Array<CharacterClass> = [];
    const initialStatus = 'Starting' as Status;

    const [characters, dispatch] = useReducer(characterReducer, initialState);

    const [status, setStatus] = useState(initialStatus);

    const getCharacters = () => characters;
    const getStatus = () => status;

    const handleLoad = useCallback(async () => {
        try {
            setStatus('Loading');
            const data = await repo.load();
            dispatch(ac.characterLoadCreator(data));
            setStatus('Loaded');
        } catch (error) {
            handleError(error as Error);
        }
    }, [repo]);

    const handleAdd = async function (character: CharacterClass) {
        try {
            const fullCharacter = await repo.create(character);
            dispatch(ac.characterAddCreator(fullCharacter));
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleUpdate = async function (
        characterPayload: Partial<CharacterClass>
    ) {
        try {
            const fullCharacter = await repo.update(characterPayload);
            dispatch(ac.characterUpdateCreator(fullCharacter));
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleDelete = async function (id: CharacterClass['id']) {
        try {
            const finalId = await repo.delete(id);
            dispatch(ac.characterDeleteCreator(finalId));
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleError = (error: Error) => {
        return 'Error';
    };

    return {
        getStatus,
        getCharacters,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
}
