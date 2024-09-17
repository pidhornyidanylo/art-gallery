import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EventGenericSection from './EventGenericSection';

describe('EventGenericSection Server Component', () => {
  it('renders properly', async () => {
    render(
      await EventGenericSection({
        colorScheme: '#9C1006',
        author: 'Nico Galmozzi',
        eventType: 'exibition',
        subTitle: 'Lockdown Portraits',
        type: 'basic',
        text: '',
        cover: '',
        arrow: '',
        dateIcon: '',
      })
    );
    const headingWithAuthorName = screen.getByTestId('author-name');
    expect(headingWithAuthorName).toBeInTheDocument();
  });
});
