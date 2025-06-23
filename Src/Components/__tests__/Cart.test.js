import { render, act, screen, fireEvent } from '@testing-library/react';
import ResturantMenu from '../RestaurantMenu';
import Header from '../Header';
import { MOCK_DATA } from '../Mocks/MockResMenu.json';
import { Provider } from 'react-redux';
import appStore from '../../Components/Utils/appStore';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
it('should load Resturant Menu component', async () => {
  await act(async () =>
    render(
      <Provider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <ResturantMenu store={appStore} />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText('ROLLS');
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId('foodItems').length.toBe(15));

  const addBtns = screen.getAllByRole('button', { name: 'Add +' });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText('cart🛒-(1 Items)').toBeInTheDocument());
  console.log(addBtns.length);
});
