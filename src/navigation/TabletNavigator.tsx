// src/navigation/TabletNavigator.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { Product } from '../state/types';
import { Text } from 'react-native-paper';

const TabletNavigator = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.master}>
        <ProductListScreen onSelectProduct={setSelectedProduct} />
      </View>
      <View style={styles.detail}>
        {selectedProduct ? (
          <ProductDetailScreen product={selectedProduct} />
        ) : (
          <Text>Select a product to view details</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  master: { flex: 1, borderRightWidth: 1, borderColor: '#ccc' },
  detail: { flex: 2, padding: 20 },
});

export default TabletNavigator;
