import { Sum } from '../Sum';

test('The function should calculate sum of two numbers', () => {
  const result = Sum(3, 4);

  expect(result).toBe(7);
});
