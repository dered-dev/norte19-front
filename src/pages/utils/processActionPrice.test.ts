import { describe, it, expect } from 'vitest';
import { processActionPrice } from './processActionPrice';

describe('processActionPrice', () => {
    it('should return an empty string when closing_price is not provided', () => {
        const result = processActionPrice({ opening_price: '100' });
        expect(result).toBe('');
    });

    it('should return an empty string when opening_price is not provided', () => {
        const result = processActionPrice({ closing_price: '100' });
        expect(result).toBe('');
    });

    it('should calculate and return the correct price variation and percentage change when both prices are provided', () => {
        const result = processActionPrice({ closing_price: '120', opening_price: '100' });
        expect(result).toBe('+20.00 | 20.00%');
    });

    it('should handle negative variation correctly', () => {
        const result = processActionPrice({ closing_price: '80', opening_price: '100' });
        expect(result).toBe('-20.00 | -20.00%');
    });

    it('should handle no variation correctly', () => {
        const result = processActionPrice({ closing_price: '100', opening_price: '100' });
        expect(result).toBe('0.00 | 0.00%');
    });

});
