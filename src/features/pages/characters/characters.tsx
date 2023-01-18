import { useContext } from "react";
import { Comunication } from "../../../core/components/comunication/comunication";
import { List } from "../../../core/components/list/list";
import { CharacterContext } from "../../../core/context/characters.context";
export default function CharactersPage () {
    const { show } = useContext(CharacterContext);
    const character = show[0]
    return (
        <>
            <List></List>
            {show.length ? <Comunication item={character}></Comunication> : ''}
        </>
    );
}
