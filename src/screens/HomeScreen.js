import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Producto A', price: 100 },
  { id: '2', name: 'Producto B', price: 150 },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.product}
            onPress={() => navigation.navigate('Checkout', { product: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  product: { padding: 16, marginVertical: 8, backgroundColor: '#f9f9f9', borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: '#555' },
});
