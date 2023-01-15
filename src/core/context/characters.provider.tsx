import { useMemo } from 'react';
import { CharacterContext } from './characters.context';
import { useCharacter } from '../../hooks/use.characters';

export function CharacterContextProvider({ children }: { children: JSX.Element }) {
    const { getCharacters, handleLoad, handleAdd, handleDelete, handleUpdate } =
        useCharacter();

    const context = useMemo(
        () => ({
            characters: getCharacters(),
            handleLoad,
            handleAdd,
            handleDelete,
            handleUpdate,
        }),
        [getCharacters, handleAdd, handleDelete, handleLoad, handleUpdate]
    );

    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
