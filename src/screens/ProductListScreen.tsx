// src/screens/ProductListScreen.tsx
import React from 'react';
import { View, Text, Button, FlatList, RefreshControl } from 'react-native';
import { useQuery } from 'react-query';
import { fetchProducts } from '../api/fetchProducts';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PhoneStackParamList } from '../navigation/PhoneNavigator';
import { Product } from '../state/types';

type ProductListScreenNavigationProp = StackNavigationProp<PhoneStackParamList, 'Products'>;

type ProductListScreenProps = {
    onSelectProduct?: (product: Product) => void;
}

const ProductListScreen: React.FC<ProductListScreenProps> = ({ onSelectProduct }) => {
  const navigation = useNavigation<ProductListScreenNavigationProp>();

  const { data: products, isLoading, isError, refetch } = useQuery('products', fetchProducts);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error loading products. Please try again.</Text>
        <Button title="Retry" onPress={() => refetch()} />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => {
            if (onSelectProduct) {
                onSelectProduct(item);
            } else {
                navigation.navigate('ProductDetail', { product: item });
            }
          }}
        />
      )}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
    />
  );
};

export default ProductListScreen;
