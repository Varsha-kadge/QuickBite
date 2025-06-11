import { act, fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import { BrowserRouter, json } from 'react-router-dom';
import MOCK_DATA from '../../Components/Mocks/mockResListData.json';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('Should render the body component with search', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole('button', {
    name: 'Search',
  });
  const searchInput = screen.getAllByTestId('searchInput');
  fireEvent.change(searchInput, {
    target: {
      value: 'subway',
    },
  });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId('resCard');

  expect(cards.length).toBe(1);

  //screen should load 4 cards
  expect(searchBtn).toBeInTheDocument();
});
