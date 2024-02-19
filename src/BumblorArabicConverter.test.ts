// BumblorArabicConverter.test.ts

import { describe, it, expect } from 'vitest';
import BumblorArabicConverter from './BumblorArabicConverter';

describe('BumblorArabicConverter Tests', () => {

    describe('bumblor2arabic Function Tests', () => {

        it('should convert a simple Bumblor numeral to Arabic integer', () => {
            expect(BumblorArabicConverter.bumblor2arabic('III')).toBe(3);
        });

        it('should convert a complex Bumblor numeral to Arabic integer', () => {
            expect(BumblorArabicConverter.bumblor2arabic('MMMMDCCCC')).toBe(4900);
        });

        it('should handle lowercase input', () => {
            expect(BumblorArabicConverter.bumblor2arabic('iii')).toBe(3);
        });

        it('should throw error for malformed Bumblor numeral', () => {
            expect(() => BumblorArabicConverter.bumblor2arabic('IIII'))
        });

        it('should throw error for leading spaces in the input', () => {
            expect(() => BumblorArabicConverter.bumblor2arabic('  MMM')).toThrow();
        });

        it('should throw error for trailing spaces in the input', () => {
            expect(() => BumblorArabicConverter.bumblor2arabic('MMM  ')).toThrow();
        });

        it('should throw error for spaces in the middle of the input', () => {
            expect(() => BumblorArabicConverter.bumblor2arabic('M M M')).toThrow();
        });

        it('should throw error for floating point numbers', () => {
            expect(() => BumblorArabicConverter.bumblor2arabic('MM.M')).toThrow();
        });

        it('should throw error for Bumblor numerals not in proper descending order', () => {
            expect(() => BumblorArabicConverter.bumblor2arabic('DM')).toThrow();
        });

        it('should throw error for Bumblor numerals out of range', () => {
            expect(() => BumblorArabicConverter.bumblor2arabic('MMMMM')).toThrow();
        });
    });

    describe('arabic2bumblor Function Tests', () => {

        it('should convert a simple Arabic integer to Bumblor numeral', () => {
            expect(BumblorArabicConverter.arabic2bumblor(3)).toBe('III');
        });

        it('should convert a complex Arabic integer to Bumblor numeral', () => {
            expect(BumblorArabicConverter.arabic2bumblor(4900)).toBe('MMMMDCCCC');
        });

        it('should throw error for non-integer input', () => {
            expect(() => BumblorArabicConverter.arabic2bumblor(3.5)).toThrow();
        });

        it('should throw error for Arabic integers outside the range (1-4999)', () => {
            expect(() => BumblorArabicConverter.arabic2bumblor(0)).toThrow();
            expect(() => BumblorArabicConverter.arabic2bumblor(5000)).toThrow();
        });

        it('should handle minimum and maximum range values', () => {
            expect(BumblorArabicConverter.arabic2bumblor(1)).toBe('I');
            expect(BumblorArabicConverter.arabic2bumblor(4999)).toBe('MMMMDCCCCLXXXXVIIII');
        });

        it('should handle zero input', () => {
            expect(() => BumblorArabicConverter.arabic2bumblor(0)).toThrow();
        });

    });

});
