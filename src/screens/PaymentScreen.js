import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { isValidCreditCardNumber, detectCardType } from '../utils/creditCardValidator';

export default function PaymentScreen() {
  const [cardNumber, setCardNumber] = useState('');

  const handlePayment = () => {
    if (!isValidCreditCardNumber(cardNumber)) {
      Alert.alert('Error', 'El número de tarjeta no es válido.');
      return;
    }

    const cardType = detectCardType(cardNumber);
    Alert.alert('Éxito', `Tarjeta válida detectada: ${cardType}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Número de Tarjeta:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingrese su número de tarjeta"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <Button title="Validar y Pagar" onPress={handlePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16, borderRadius: 4 },
});
