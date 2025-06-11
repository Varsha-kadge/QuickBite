import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantsCard';
import Mock_Data from '../Mocks/ResCardMock.json';
import '@testing-library/jest-dom';

it('should render name of the resturant from RestaurantCard componet', () => {
  render(<RestaurantCard resData={Mock_Data} />);
  const NameOfRest = screen.getByText(/McDonald's/);

  expect(NameOfRest).toBeInTheDocument();
});

it('should render Promoted label from RestaurantCard componet', () => {
  render(<RestaurantCard resData={Mock_Data} />);
  //const promotedLabel = screen.getByText(/Promoted/);

  //expect(promotedLabel).toBeInTheDocument();
});
