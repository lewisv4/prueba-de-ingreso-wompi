import { isValidCreditCardNumber, detectCardType } from './creditCardValidator';

describe('Credit Card Validator', () => {
  test('should validate a valid VISA card number', () => {
    expect(isValidCreditCardNumber('4111111111111111')).toBe(true);
  });

  test('should validate a valid MasterCard number', () => {
    expect(isValidCreditCardNumber('5555555555554444')).toBe(true);
  });

  test('should invalidate an incorrect card number', () => {
    expect(isValidCreditCardNumber('1234567890123456')).toBe(false);
  });

  test('should detect VISA card type', () => {
    expect(detectCardType('4111111111111111')).toBe('Visa');
  });

  test('should detect MasterCard card type', () => {
    expect(detectCardType('5555555555554444')).toBe('MasterCard');
  });

  test('should return Unknown for an unsupported card type', () => {
    expect(detectCardType('1234567890123456')).toBe('Unknown');
  });
});
