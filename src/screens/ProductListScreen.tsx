import React, { useState } from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import { fetchProducts } from '../api/fetchProducts';
import ProductCard from '../components/ProductCard';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PhoneStackParamList } from '../navigation/PhoneNavigator';
import { useGlobalContext } from '../state/GlobalContext';

type ProductListScreenNavigationProp = StackNavigationProp<PhoneStackParamList, 'Products'>;

const ProductListScreen: React.FC = () => {
    const navigation = useNavigation<ProductListScreenNavigationProp>();
    const { setSelectedProduct } = useGlobalContext();
    const [refreshing, setRefreshing] = useState(false);

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        refetch,
    } = useInfiniteQuery(
        'products',
        ({ pageParam = 0 }) => fetchProducts(10, pageParam),
        {
        getNextPageParam: (lastPage, allPages) =>
            lastPage.length ? allPages.length * 10 : undefined,
        }
    );

    // Flatten all pages of data into a single array
    const products = data?.pages.flat() || [];

    if (isLoading) {
        return <LoadingSkeleton />;
    }

    if (isError) {
        return (
        <View style={styles.centered}>
            <Text>Error loading products. Please try again.</Text>
            <Text
                style={styles.retryText}
                onPress={() => refetch()}
            >
                Retry
            </Text>
        </View>
        );
    }

    if (products.length === 0) {
        return (
        <View style={styles.centered}>
            <Text>No products available.</Text>
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
                        setSelectedProduct(item);
                        navigation.navigate('ProductDetail', { product: item });
                    }}
                />
            )}
            onEndReached={() => {
                if (hasNextPage) fetchNextPage();
            }}
            onEndReachedThreshold={0.5}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={async () => {
                        setRefreshing(true);
                        await refetch();
                        setRefreshing(false);
                    }}
                />
            }
        />
    );
};

const styles = StyleSheet.create({
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    retryText: { color: '#007bff', marginTop: 10, textDecorationLine: 'underline' },
});

export default ProductListScreen;
