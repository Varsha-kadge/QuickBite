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

it('Should search res list for KFC input', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // const cardBeforeSearch = screen.getAllByTestId("resCard");
  // expect(cardBeforeSearch.length).toBe(8)
  const searchBtn = screen.getByRole('button', {
    name: 'Search',
  });
  const searchInput = screen.getByTestId('searchInput');
  fireEvent.change(searchInput, {
    target: {
      value: 'KFC',
    },
  });
  fireEvent.click(searchBtn);
  //const cardAfterSearch = screen.getAllByTestId("resCard");
  // expect(cardAfterSearch.length).toBe(1)

  const cardsBeforeFilter = screen.getAllByTestId('resCard');

  //expect(cardsBeforeFilter.length).toBe(8);

  const topRatedRes = screen.getByRole('button', { name: 'Top Restaurants' });

  fireEvent.click(topRatedRes);

  const cardsAfterFilter = screen.getAllByTestId('resCard');

  //expect(cardsAfterFilter.length).toBe(2);
});
