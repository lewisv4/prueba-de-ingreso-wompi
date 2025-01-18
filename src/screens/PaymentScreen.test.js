import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PaymentScreen from './PaymentScreen';

describe('PaymentScreen', () => {
  it('shows an error alert for invalid card numbers', () => {
    const { getByPlaceholderText, getByText } = render(<PaymentScreen />);
    const input = getByPlaceholderText('Ingrese su número de tarjeta');
    const button = getByText('Validar y Pagar');

    fireEvent.changeText(input, '1234567890123456');
    fireEvent.press(button);

    // Simulate the alert message
    expect(getByText('Error')).toBeTruthy();
  });

  it('shows a success alert for valid card numbers', () => {
    const { getByPlaceholderText, getByText } = render(<PaymentScreen />);
    const input = getByPlaceholderText('Ingrese su número de tarjeta');
    const button = getByText('Validar y Pagar');

    fireEvent.changeText(input, '4111111111111111');
    fireEvent.press(button);

    // Simulate the alert message
    expect(getByText('Éxito')).toBeTruthy();
  });
});
