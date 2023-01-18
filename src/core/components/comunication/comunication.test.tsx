/* eslint-disable no-restricted-globals */
import { render, screen } from '@testing-library/react';
import { jaime } from "../../../features/models/characters";
import { Comunication } from "./comunication";

describe('Given Comunication component', () => {
    const mockCharacter = jaime
    beforeEach(() => {
        render(<Comunication item={mockCharacter}></Comunication>);
    });
    test(`Then it should be render the data`, () => {
        const text = screen.getByText(mockCharacter.message);  
        expect(text).toBeInTheDocument();
    });
});
