/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { useCharacterType } from '../../hooks/use.characters';
import { CharacterClass, CharacterModel } from '../../features/models/character.model';

export type CharacterContextStructure = Omit<
    useCharacterType,
    'getStatus' | 'getCharacters' 
> & {
    characters: Array<CharacterClass>;
};

export const initialContext: CharacterContextStructure = {
    characters: [],
    handleLoad: async () => {},
    handleAdd: async (Character: CharacterModel) => {},
    handleDelete: async (id: string) => {},
    handleUpdate: async (CharacterPayload: Partial<CharacterClass>) => {},
    handleShow: () => {},
    show: [],
};

export const CharacterContext = createContext(initialContext);
