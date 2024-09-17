import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InProgram from './page';

describe('InProgram Server Component', () => {
  it('renders container', async () => {
    render(await InProgram({}));
    const sectionsContainer = screen.getByTestId('sections-container');
    expect(sectionsContainer).toBeInTheDocument();
  });
});
