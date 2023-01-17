import { useContext, useEffect } from 'react';
import { AdvisorComponent } from '../../../features/components/advisor/advisor';
import { FighterComponent } from '../../../features/components/fighter/fighter';
import { KingComponent } from '../../../features/components/king/king';
import { SquireComponent } from '../../../features/components/squire/squire';
import { CharacterClass } from '../../../features/models/character.model';
import { CharacterContext } from '../../context/characters.context';
export function List() {
    const { characters, handleLoad } = useContext(CharacterContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);
    return (
        <>
            <h3>Character List</h3>
            <ul className="characters-list list-unstyled">
                {characters.map((item: CharacterClass) => {
                    switch (item.name) {
                        case 'Joffrey':
                            return (
                                <KingComponent
                                    key={item.id}
                                    item={item}
                                ></KingComponent>
                            );
                        case 'Jaime':
                            return (
                                <FighterComponent
                                    key={item.id}
                                    item={item}
                                ></FighterComponent>
                            );
                        case 'Daenerys':
                            return (
                                <FighterComponent
                                    key={item.id}
                                    item={item}
                                ></FighterComponent>
                            );
                        case 'Tyrion':
                            return (
                                <AdvisorComponent
                                    key={item.id}
                                    item={item}
                                ></AdvisorComponent>
                            );
                        case 'Bronn':
                            return (
                                <SquireComponent
                                    key={item.id}
                                    item={item}
                                ></SquireComponent>
                            );
                        default:
                            return <p>Error</p>;
                    }
                })}
            </ul>
        </>
    );
}
