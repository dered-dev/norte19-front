// interceptors.test.ts
import axios from 'axios';
import { describe, it, expect, vi } from 'vitest';
import './interceptors'; // Import your interceptors
const token = import.meta.env.VITE_APP_TOKEN


describe('Axios Interceptors', () => {
  it('should add Authorization header to requests', async () => {

    // Mock the axios request method
    const axiosRequestMock = vi.spyOn(axios, 'request').mockResolvedValue({
      data: {},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    const config = await axios.get('https://restcountries.com/v3.1/alpha/us'); // Use a mocked URL
    expect(config.config.headers.Authorization).toBe(`Bearer ${token}`); // Uncomment this for the test

    axiosRequestMock.mockRestore();
  }, 30000);

});
