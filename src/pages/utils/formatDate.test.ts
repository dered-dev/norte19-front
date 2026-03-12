import { describe, it, expect } from 'vitest';
import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('should format a valid date string correctly', () => {
    const input = '2024-10-28T20:00:00Z'; // Example ISO date string
    const expectedOutput = '28/10/2024';
    expect(formatDate(input)).toBe(expectedOutput);
  });

  it('should return undefined for an undefined input', () => {
    expect(formatDate(undefined)).toBeUndefined();
  });

  it('should return undefined for an empty string', () => {
    expect(formatDate('')).toBeUndefined();
  });

});
