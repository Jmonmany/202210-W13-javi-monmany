import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { CHARACTER } from '../../features/data/mock.character';
import { CharacterClass } from '../../features/models/character.model';
import { initialContext, CharacterContext } from './characters.context';
const mockCharacter: CharacterClass = CHARACTER;
initialContext.characters = [mockCharacter];

describe('Given the context AppContext', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test Component is wrapper with this context', () => {
        beforeEach(() => {
            TestComponent = () => {
                const {
                    characters,
                    handleLoad,
                    handleDelete,
                    handleAdd,
                    handleUpdate,
                } = useContext(CharacterContext);
                handleLoad();
                handleAdd(mockCharacter);
                handleDelete(mockCharacter.id);
                handleUpdate(mockCharacter);
                return <>{characters[0].name}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <CharacterContext.Provider value={initialContext}>
                    <TestComponent></TestComponent>
                </CharacterContext.Provider>
            );
            const element = screen.getByText(initialContext.characters[0].name);
            expect(element).toBeInTheDocument();
        });
    });
});
