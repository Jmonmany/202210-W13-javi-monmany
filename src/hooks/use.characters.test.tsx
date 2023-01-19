/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    mockCharacter1,
    mockCharacter2,
    mockAddCharacter,
    mockUpdateCharacter,
    mockValidRepoResponse,
    mockNoValidRepoResponse,
} from './testing.mock';

import { CharacterRepo } from '../core/services/repository';
import { useCharacter } from './use.characters';
import { CharacterClass } from '../features/models/character.model';
import * as debug from '../tools/debug';
jest.mock('../core/services/repository');

CharacterRepo.prototype.load = jest.fn();
CharacterRepo.prototype.create = jest.fn();
CharacterRepo.prototype.update = jest.fn();
CharacterRepo.prototype.delete = jest.fn();
describe(`Given useCharacters (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let spyConsole: jest.SpyInstance;
    let buttons: Array<HTMLElement>;
    beforeEach(() => {
        TestComponent = () => {
            const {
                getStatus,
                getCharacters,
                handleLoad,
                handleAdd,
                handleUpdate,
                handleDelete,
            } = useCharacter();
            return (
                <>
                    <button onClick={handleLoad}>Load</button>
                    <button onClick={() => handleAdd(mockAddCharacter)}>
                        Add
                    </button>
                    <button onClick={() => handleUpdate(mockUpdateCharacter)}>
                        Update
                    </button>
                    <button onClick={() => handleDelete(mockCharacter2.id)}>
                        Delete
                    </button>
                    {getStatus() !== 'Loaded' ? (
                        <p>Loading</p>
                    ) : (
                        <div>
                            <p>Loaded</p>
                            <ul>
                                {getCharacters().map(
                                    (character: CharacterClass) => (
                                        <li key={character.id}>
                                            {character.name}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}
                </>
            );
        };
        render(<TestComponent />);
        buttons = screen.getAllByRole('button');
        spyConsole = jest.spyOn(debug, 'consoleDebug');
    });
    describe(`When the repo is working OK`, () => {
        beforeEach(mockValidRepoResponse);

        test('Then its function handleLoad should be add places to the state', async () => {
            expect(await screen.findByText(/loading/i)).toBeInTheDocument();
            userEvent.click(buttons[0]);
            expect(CharacterRepo.prototype.load).toHaveBeenCalled();
            expect(
                await screen.findByText(mockCharacter1.name)
            ).toBeInTheDocument();
            expect(
                await screen.findByText(mockCharacter2.name)
            ).toBeInTheDocument();
        });

        test('Then its function handleAdd should be used', async () => {
            userEvent.click(buttons[0]);
            userEvent.click(buttons[1]);
            expect(CharacterRepo.prototype.create).toHaveBeenCalled();
            expect(
                await screen.findByText(mockAddCharacter.name)
            ).toBeInTheDocument();
        });

        test('Then its function handleUpdate should be used', async () => {
            userEvent.click(buttons[0]);
            userEvent.click(buttons[2]);
            expect(CharacterRepo.prototype.update).toHaveBeenCalled();
            expect(
                await screen.findByText(mockUpdateCharacter.name)
            ).toBeInTheDocument();
        });

        test('Then its function handleDelete should be used', async () => {
            userEvent.click(buttons[0]);
            expect(CharacterRepo.prototype.load).toHaveBeenCalled();
            userEvent.click(buttons[3]);
            expect(CharacterRepo.prototype.delete).toHaveBeenCalled();
            expect(
                await screen.findByText(mockCharacter2.name)
            ).toBeInTheDocument();

            await expect(
                async () => await screen.findByText(mockCharacter1.name)
            ).rejects.toThrowError();
        });
    });
    describe(`When the repo is NOT working OK`, () => {
        beforeEach(mockNoValidRepoResponse);
        test('Then its function handleLoad should be used', async () => {
            userEvent.click(buttons[0]);
            expect(CharacterRepo.prototype.load).toHaveBeenCalled();
            await waitFor(() => {
                expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
            });
        });
        test('Then its function handleAdd should be used', async () => {
            userEvent.click(buttons[1]);
            expect(CharacterRepo.prototype.create).toHaveBeenCalled();
            await waitFor(() => {
                expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
            });
        });
        test('Then its function handleUpdate should be used', async () => {
            userEvent.click(buttons[2]);
            expect(CharacterRepo.prototype.update).toHaveBeenCalled();
            await waitFor(() => {
                expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
            });
        });
        test('Then its function handleDelete should be used', async () => {
            userEvent.click(buttons[3]);
            expect(CharacterRepo.prototype.delete).toHaveBeenCalled();
            await waitFor(() => {
                expect(spyConsole).toHaveBeenLastCalledWith('Testing errors');
            });
        });
    });
});
