import dispCounter from './itemCount.js';

const listArray = [
  { meal: 'Cajun spiced fish tacos' },
  { meal: 'Escovitch Fish' },
  { meal: 'Fish fofos' },
  { meal: 'Fish pie' },
  { meal: 'Fish Stew with Rouille' },
];

describe('Testing for item counter', () => {
  test('Test for five item count', () => {
    const count = dispCounter(listArray);
    expect(count).toBe(5);
  });

  test('Test for invalid item count', () => {
    const count = dispCounter(null);
    expect(count).toBe(0);
  });
});