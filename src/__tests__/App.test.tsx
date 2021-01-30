import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import App from '../App';
import Library from '../components/Library';

jest.mock('../components/Library');
mocked(Library).mockReturnValue(<div />);

describe('App', () => {
  it('should render the library', () => {
    render(<App />);
    expect(Library).toHaveBeenCalled();
  });
});
