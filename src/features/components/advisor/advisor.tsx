import { CharacterClass } from '../../models/character.model';
import { Advisor } from '../../models/Advisor';
import { useContext } from 'react';
import { CharacterContext } from '../../../core/context/characters.context';

export function AdvisorComponent({ item }: { item: CharacterClass }) {
    const { handleDelete, handleShow } = useContext(CharacterContext);

    const handleSend = () => {
        handleShow(item);
    };

    const handleClick = () => {
        item.state = !item.state;
        handleDelete(item.id);
    };
    return (
        <>
            <li className="character col">
                <div className="card character__card">
                    <img
                        src={item.imageUrl}
                        alt={item.name + ' ' + item.family}
                        className="character__picture card-img-top"
                    />
                    <div className="card-body">
                        <h2 className="character__name card-title h4">
                            {item.name} {item.family}
                        </h2>
                        <div className="character__info">
                            <ul className="list-unstyled">
                                <li>Age: {item.age} years</li>
                                <li>
                                    State: <i>👍</i>
                                </li>
                            </ul>
                        </div>
                        <div className="character__overlay">
                            <ul className="list-unstyled">
                                <li>
                                    Advising to:{' '}
                                    {(item as Advisor).advising.name}
                                </li>
                            </ul>
                            <div className="character__actions">
                                <button
                                    className="character__action btn"
                                    onClick={handleSend}
                                >
                                    Speak
                                </button>
                                <button
                                    className="character__action btn"
                                    onClick={handleClick}
                                >
                                    Die
                                </button>
                            </div>
                        </div>
                    </div>
                    <i className="emoji">🎓</i>
                </div>
            </li>
        </>
    );
}
