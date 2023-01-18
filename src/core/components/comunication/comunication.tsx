import { CharacterClass } from "../../../features/models/character.model";
export function Comunication({ item }: { item: CharacterClass }) {
    return (
        <>
            <div className="comunications">
                <p className="comunications__text">
                    {item.message}
                </p>
                <img
                    className="comunications__picture"
                    src={item.imageUrl}
                    alt={item.name + item.family}
                />
            </div>
        </>
    );
}
