/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor, act } from '@testing-library/react';
import { List } from './list';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../../core/context/characters.context';
import { CHARACTER } from '../../../features/data/mock.character';
import {
    bronn,
    daenerys,
    jaime,
    joffrey,
    tyrion,
} from '../../../features/models/characters';
const mockCharacters = [CHARACTER, jaime, tyrion, bronn, joffrey, daenerys];
describe('Given "List" component', () => {
    const handleLoad = jest.fn();
    let mockContext: CharacterContextStructure;
    describe('When it is initially instantiated without data', () => {
        beforeEach(async () => {
            mockContext = {
                characters: [],
                handleLoad,
            } as unknown as CharacterContextStructure;
            await act(async () => {
                render(
                    <CharacterContext.Provider value={mockContext}>
                        <List></List>
                    </CharacterContext.Provider>
                );
            });
        });
        test(`Then component should be render the loading`, () => {
            const elementTitle = screen.getByRole('heading', {
                name: 'Character List',
            }); // <h3>
            expect(elementTitle).toBeInTheDocument();
        });
    });
    describe('When it load the data from getCharacter', () => {
        beforeEach(async () => {
            mockContext = {
                characters: mockCharacters,
                handleLoad,
            } as unknown as CharacterContextStructure;
            await act(async () => {
                render(
                    <CharacterContext.Provider value={mockContext}>
                        <List></List>
                    </CharacterContext.Provider>
                );
            });
        });
        test(`Then it should be render the data`, async () => {
            const error = screen.getByText('Error');
            const jaimeHeading = screen.getByRole('heading', {
                name: jaime.name + ' ' + jaime.family,
            });
            const tyrionHeading = screen.getByRole('heading', {
                name: tyrion.name + ' ' + tyrion.family,
            });
            const bronnHeading = screen.getByRole('heading', {
                name: bronn.name,
            });
            const joffreyHeading = screen.getByRole('heading', {
                name: joffrey.name + ' ' + joffrey.family,
            });
            const daenerysHeading = screen.getByRole('heading', {
                name: daenerys.name + ' ' + daenerys.family,
            });
            expect(error).toBeInTheDocument();
            expect(jaimeHeading).toBeInTheDocument();
            expect(tyrionHeading).toBeInTheDocument();
            expect(bronnHeading).toBeInTheDocument();
            expect(joffreyHeading).toBeInTheDocument();
            expect(daenerysHeading).toBeInTheDocument();

            await waitFor(() => {
                expect(handleLoad).toHaveBeenCalled();
            });
        });
    });
});
