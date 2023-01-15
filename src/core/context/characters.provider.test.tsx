import { render } from '@testing-library/react';
import { CharacterContextProvider } from './characters.provider';
import * as useCharacter from '../../hooks/use.characters';

describe('Given PlaceContextProvider', () => {
    describe('When we use it', () => {
        test('Then it should call the custom hook usePlaces', () => {
            const spyUseCharacter = jest.spyOn(useCharacter, 'useCharacter');
            render(
                <CharacterContextProvider>
                    <></>
                </CharacterContextProvider>
            );
            expect(spyUseCharacter).toHaveBeenCalled();
        });
    });
});
