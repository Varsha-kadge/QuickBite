import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';
import appStore from '../Utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

it('Should render login button on header page', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button', { name: 'Login' });
  //const loginButton = screen.getByText('Login');

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it('Should render login button on header page', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button');

  //Assertion
  expect(loginButton).toBeInTheDocument();
});

it('Should render login button on header page', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/);

  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it('Should change login button to logout header page', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole('button', { name: 'Login' });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole('button', { name: 'logout' });
  //Assertion
  expect(logoutButton).toBeInTheDocument();
});
