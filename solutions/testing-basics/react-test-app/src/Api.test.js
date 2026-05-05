// src/api.test.js
import { fetchData } from './Api';

beforeEach(() => {
  fetch.resetMocks();
});

test('fetchData returns data from API', async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: 'test data' }));

  const data = await fetchData();
  expect(data).toEqual({ data: 'test data' });
});
