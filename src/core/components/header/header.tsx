import { useContext } from 'react';
import { CharacterContext } from '../../context/characters.context';

export function Header({ children }: { children: JSX.Element }) {
    const title = 'Flux adaptation';
    const { characters } = useContext(CharacterContext);

    return (
        <header aria-label="title">
            <h1>{title}</h1>
            <p className="">Character: {characters.length}</p>
            {children}
        </header>
    );
}
