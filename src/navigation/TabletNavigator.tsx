import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { Text } from 'react-native-paper';
import { useGlobalContext } from '../state/GlobalContext';

const TabletNavigator = () => {
  const {selectedProduct} = useGlobalContext()
  
  return (
    <View style={styles.container}>
      <View style={styles.master}>
        <ProductListScreen />
      </View>
      <View style={styles.detail}>
        {selectedProduct ? (
          <ProductDetailScreen />
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
