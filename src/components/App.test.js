import React from 'react';
import { render, wait, fireEvent, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import unsplash from '../api/unsplash';
import App from './App';
import { searchResults } from './MockData';

const mockUnsplash = new MockAdapter(unsplash);

describe('App component', () => {
  it('should display search results correctly', async () => {
    render(<App />);

    mockUnsplash.onGet('/search/photos').reply(200, searchResults);

    const searchInput = screen.getByLabelText(/search term/i);
    fireEvent.change(searchInput, { target: { value: 'cars' } });

    const searchForm = screen.getByTestId('form');
    fireEvent.submit(searchForm);

    await wait(() => expect(screen.getAllByTestId('image')).toHaveLength(2));
  });
});
