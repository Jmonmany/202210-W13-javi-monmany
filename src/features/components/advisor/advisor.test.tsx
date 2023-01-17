import { render, screen } from '@testing-library/react';
import { tyrion } from '../../models/characters';
import { AdvisorComponent } from './advisor';
import {
    CharacterContextStructure,
    CharacterContext,
} from '../../../core/context/characters.context';
import userEvent from '@testing-library/user-event';

describe('Given "Advisor" component', () => {
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const mockContext = {
        handleUpdate,
        handleDelete,
    } as unknown as CharacterContextStructure;
    const mockAdvisor = tyrion;
    describe('When data are provided in the component', () => {
        test('Then user could interact with them', async () => {
            render(
                <CharacterContext.Provider value={mockContext}>
                    <AdvisorComponent item={mockAdvisor}></AdvisorComponent>
                </CharacterContext.Provider>
            );
            const elements = [
                screen.getByRole('heading', {
                    name: mockAdvisor.name + ' ' + mockAdvisor.family,
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
            expect(mockAdvisor.state).toBe(false);
        });
    });
});
