import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import RobotsPage from './characters';
describe('Given RobotsPage component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Router>
                    <RobotsPage></RobotsPage>
                </Router>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Character List',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
