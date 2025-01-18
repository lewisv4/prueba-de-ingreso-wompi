export function isValidCreditCardNumber(cardNumber) {
    if (!cardNumber) return false;
  
    const sanitizedNumber = cardNumber.replace(/\D/g, '');
    if (!/^\d{13,19}$/.test(sanitizedNumber)) return false;
  
    // Luhn Algorithm for validation
    let sum = 0;
    let shouldDouble = false;
    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedNumber[i], 10);
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    return sum % 10 === 0;
  }
  
  export function detectCardType(cardNumber) {
    const sanitizedNumber = cardNumber.replace(/\D/g, '');
  
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(sanitizedNumber)) {
      return 'Visa';
    }
    if (/^5[1-5][0-9]{14}$/.test(sanitizedNumber)) {
      return 'MasterCard';
    }
  
    return 'Unknown';
  }
  