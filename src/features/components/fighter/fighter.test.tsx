import { render, screen } from '@testing-library/react';
import { jaime } from '../../models/characters';
import { FighterComponent } from './fighter';
import {
    CharacterContextStructure,
    CharacterContext,
} from '../../../core/context/characters.context';
import userEvent from '@testing-library/user-event';

describe('Given "Fighter" component', () => {
    const handleShow = jest.fn();
    const handleDelete = jest.fn();
    const mockContext = {
        handleShow,
        handleDelete,
    } as unknown as CharacterContextStructure;
    const mockFighter = jaime;
    describe('When data are provided in the component', () => {
        test('Then user could interact with them', async () => {
            render(
                <CharacterContext.Provider value={mockContext}>
                    <FighterComponent item={mockFighter}></FighterComponent>
                </CharacterContext.Provider>
            );
            const elements = [
                screen.getByRole('heading', {
                    name: mockFighter.name + ' ' + mockFighter.family,
                }),
                ...screen.getAllByRole('list'), // 2 * <output>
                ...screen.getAllByRole('button'),
            ];
            expect(elements[0]).toBeInTheDocument();
            expect(elements[1]).toBeInTheDocument();
            expect(elements[2]).toBeInTheDocument();
            expect(elements[3]).toBeInTheDocument();
            expect(elements[4]).toBeInTheDocument();
            userEvent.click(elements[3]);
            expect(handleShow).toHaveBeenCalledTimes(1);
            userEvent.click(elements[4]);
            expect(handleDelete).toHaveBeenCalledTimes(1);
            expect(mockFighter.state).toBe(false);
        });
    });
});
