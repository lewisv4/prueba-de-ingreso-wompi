import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagando: {product.name}</Text>
      <Text style={styles.text}>Precio: ${product.price}</Text>
      <Button title="Pagar con Tarjeta" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 16 },
});
