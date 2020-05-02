import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import './SearchBar';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  it('should update value of input when keyword is typed', () => {
    render(<SearchBar />);

    const searchInput = screen.getByLabelText(/search term/i);
    fireEvent.change(searchInput, { target: { value: 'cars' } });

    expect(searchInput.value).toBe('cars');
  });
});
