import { useContext, useEffect } from 'react';
import { CharacterClass } from '../../../features/models/character.model';
import { CharacterContext } from '../../context/characters.context';
import { Character } from '../character/character';
export function List() {
    const { characters, handleLoad } = useContext(CharacterContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    console.log(characters);
    return (
        <>
            <ul className="">
                <h3>Character List</h3>
                {characters.map((item: CharacterClass) => {
                    return <Character key={item.id}></Character>;
                })}
            </ul>
        </>
    );
}
