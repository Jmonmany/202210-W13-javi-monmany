import { render, screen } from '@testing-library/react';
import { jaime } from '../../models/characters';
import { KingComponent } from './king';
import {
    CharacterContextStructure,
    CharacterContext,
} from '../../../core/context/characters.context';
import userEvent from '@testing-library/user-event';

describe('Given "King" component', () => {
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const mockContext = {
        handleUpdate,
        handleDelete,
    } as unknown as CharacterContextStructure;
    const mockKing = jaime;
    describe('When data are provided in the component', () => {
        test('Then user could interact with them', async () => {
            render(
                <CharacterContext.Provider value={mockContext}>
                    <KingComponent item={mockKing}></KingComponent>
                </CharacterContext.Provider>
            );
            const elements = [
                screen.getByRole('heading', {
                    name: mockKing.name + ' ' + mockKing.family,
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
            expect(handleUpdate).toHaveBeenCalledTimes(1);
            userEvent.click(elements[4]);
            expect(handleDelete).toHaveBeenCalledTimes(1);
            expect(mockKing.state).toBe(false);
        });
    });
});
