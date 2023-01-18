import { useMemo } from 'react';
import { CharacterContext } from './characters.context';
import { useCharacter } from '../../hooks/use.characters';

export function CharacterContextProvider({ children }: { children: JSX.Element }) {
    const {show ,getCharacters, handleLoad, handleAdd, handleDelete, handleUpdate, handleShow} =
        useCharacter();

    const context = useMemo(
        () => ({
            characters: getCharacters(),
            handleLoad,
            handleAdd,
            handleDelete,
            handleUpdate,
            handleShow,
            show
        }),
        [
            getCharacters,
            handleAdd,
            handleDelete,
            handleLoad,
            handleUpdate,
            handleShow,
            show
        ]
    );

    return (
        <CharacterContext.Provider value={context}>
            {children}
        </CharacterContext.Provider>
    );
}
