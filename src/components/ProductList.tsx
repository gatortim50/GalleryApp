// src/components/ProductList.tsx
import React from 'react';
import { FlatList, StyleSheet, FlatListProps } from 'react-native';
import { Product } from '../state/types';

interface ProductListProps {
  products: Product[];
  renderItem: FlatListProps<Product>['renderItem'];
  refreshControl?: JSX.Element;
}

const ProductList: React.FC<ProductListProps> = ({ products, renderItem, refreshControl }) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderItem}
    style={styles.list}
    refreshControl={refreshControl}
  />
);

const styles = StyleSheet.create({
  list: { flex: 1 },
});

export default ProductList;
