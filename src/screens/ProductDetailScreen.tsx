import React from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { PhoneStackParamList } from '../navigation/PhoneNavigator';
import FastImage from 'react-native-fast-image';
import { useGlobalContext } from '../state/GlobalContext';
import { Review } from '../state/types';

type ProductDetailScreenRouteProp = RouteProp<PhoneStackParamList, 'ProductDetail'>;

const ProductDetailScreen: React.FC = () => {
  const { selectedProduct } = useGlobalContext();
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { width } = useWindowDimensions();
  const product = selectedProduct || route.params.product;

  const lastImage = product.images[product.images.length - 1];

  return (
    <ScrollView contentContainerStyle={[styles.container, width >= 768 && styles.tabletContainer]}>
      {/* Product Image */}
      <FastImage
        source={{ uri: lastImage }}
        style={[styles.image, width >= 768 && styles.tabletImage]}
        resizeMode={FastImage.resizeMode.cover}
      />

      {/* Product Details */}
      <View style={styles.section}>
        <Text style={[styles.title, width >= 768 && styles.tabletTitle]}>{product.title}</Text>
        <Text style={[styles.description, width >= 768 && styles.tabletDescription]}>
          {product.description}
        </Text>
      </View>

      {/* Price and Availability */}
      <View style={styles.section}>
        <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
        <Text style={styles.discount}>
          Discount: {product.discountPercentage.toFixed(2)}%
        </Text>
        <Text style={styles.stock}>
          Availability: {product.availabilityStatus} (Stock: {product.stock})
        </Text>
      </View>

      {/* Specifications */}
      <View style={styles.section}>
        <Text style={styles.heading}>Specifications:</Text>
        <Text>Brand: {product.brand}</Text>
        <Text>SKU: {product.sku}</Text>
        <Text>Weight: {product.weight} kg</Text>
        <Text>
          Dimensions: {product.dimensions.width} x {product.dimensions.height} x{' '}
          {product.dimensions.depth} cm
        </Text>
        <Text>Warranty: {product.warrantyInformation}</Text>
        <Text>Shipping: {product.shippingInformation}</Text>
      </View>

      {/* Reviews */}
      <View style={styles.section}>
        <Text style={styles.heading}>Reviews:</Text>
        {product.reviews.length > 0 ? (
          product.reviews.map((review: Review, index: number) => (
            <View key={index} style={styles.review}>
              <Text style={styles.reviewName}>
                {review.reviewerName} - {review.rating}/5
              </Text>
              <Text>{review.comment}</Text>
            </View>
          ))
        ) : (
          <Text>No reviews available.</Text>
        )}
      </View>

      {/* Return Policy */}
      <View style={styles.section}>
        <Text style={styles.heading}>Return Policy:</Text>
        <Text>{product.returnPolicy}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  tabletContainer: { paddingHorizontal: 40 },
  image: { width: '100%', height: 300, borderRadius: 10, marginBottom: 20 },
  tabletImage: { height: 400 },
  section: { marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  tabletTitle: { fontSize: 28 },
  description: { fontSize: 16, color: '#555' },
  tabletDescription: { fontSize: 18 },
  price: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  discount: { fontSize: 16, color: '#d9534f', marginBottom: 5 },
  stock: { fontSize: 16, color: '#5cb85c' },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  review: { marginBottom: 10, padding: 10, backgroundColor: '#f9f9f9', borderRadius: 5 },
  reviewName: { fontWeight: 'bold' },
});

export default ProductDetailScreen;
