import { describe, it, expect } from 'vitest';
import BumblorArabicConverter from './BumblorArabicConverter';

describe('BumblorArabicConverter', () => {

    describe('bumblor2arabic', () => {

        it('converts simple numbers', () => {
            expect(BumblorArabicConverter.bumblor2arabic('III')).toBe(3);
        });

    });

    describe('arabic2bumblor', () => {

        it('throws error out of range', () => {
            expect(() => BumblorArabicConverter.arabic2bumblor(0)).toThrow("Out of Range");
        });

    });

});
