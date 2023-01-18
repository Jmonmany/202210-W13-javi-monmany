import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import {
    CharacterContext,
    CharacterContextStructure,
} from '../../../core/context/characters.context';
import { jaime } from '../../models/characters';
import CharactersPage from './characters';
describe('Given CharactersPage component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Router>
                    <CharactersPage></CharactersPage>
                </Router>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Character List',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
    describe('When the show state is not falsy', () => {
        const handleLoad = jest.fn();
        test('Then the title should be in the screen', () => {
            const mockContext = {
                show: [jaime],
                characters: [jaime],
                handleLoad,
            } as unknown as CharacterContextStructure;
            render(
                <CharacterContext.Provider value={mockContext}>
                    <CharactersPage></CharactersPage>
                </CharacterContext.Provider>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Character List',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
