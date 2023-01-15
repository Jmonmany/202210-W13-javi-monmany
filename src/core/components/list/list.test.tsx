/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor, act } from '@testing-library/react';
import { List } from './list';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../../core/context/characters.context';
import { CHARACTER } from '../../../features/data/mock.character';

const mockCharacter = CHARACTER;

describe('Given "List" component', () => {
    const handleLoad = jest.fn();
    let mockContext: CharacterContextStructure;

    describe('When it is initially instantiated without data', () => {
        beforeEach(async () => {
            mockContext = {
                places: [],
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
                name: 'Lista de lugares',
            }); // <h3>
            const addLabel = /Añadir lugar/i;
            const loadingLabel = /Loading/i;
            const elementAdd = screen.getByText(addLabel);
            const elementLoading = screen.getByText(loadingLabel);
            expect(elementTitle).toBeInTheDocument();
            expect(elementAdd).toBeInTheDocument();
            expect(elementLoading).toBeInTheDocument();
        });
    });

    describe('When it load the data from getPlace', () => {
        beforeEach(async () => {
            mockContext = {
                places: mockCharacter,
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
            const elementList = await screen.findByRole('list'); // <ul />
            expect(elementList).toBeInTheDocument();
            await waitFor(() => {
                expect(handleLoad).toHaveBeenCalled();
            });
            const elementItem = await screen.findByText(/Test place/i);
            expect(elementItem).toBeInTheDocument();
        });
    });
});
