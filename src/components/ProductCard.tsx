import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { Product } from '../state/types';
import Icon from 'react-native-vector-icons/Ionicons';

type ProductCardProps = {
  product: Product;
  onPress: () => void;
  cardWidth: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress, cardWidth }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.card, { width: cardWidth }]}
      activeOpacity={0.8}
    >
      <View style={styles.shadowContainer}>
        {/* Thumbnail */}
        <ShimmerPlaceholder 
          visible={!isLoading}
          style={[
            styles.imageContainer, 
            { 
              width: cardWidth,
              height: cardWidth * 0.75
            }
          ]}
        >
          <Image
            source={{ uri: product.thumbnail }}
            style={[
              styles.image,
              {
                width: cardWidth,
                height: cardWidth * 0.75
              }
            ]}
            onLoad={() => setIsLoading(false)}
          />
        </ShimmerPlaceholder>

        {/* Product Details */}
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          <View style={styles.meta}>
            {/* Rating */}
            <View style={styles.ratingContainer}>
              <Icon name="star" size={14} color="#FFD700" />
              <Text style={styles.rating}>{product.rating.toFixed(1)}</Text>
            </View>

            {/* Stock */}
            <Text
              style={[
                styles.stock,
                { color: product.stock > 0 ? '#28a745' : '#dc3545' },
              ]}
            >
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,  // Android shadow
    width: '100%'
  },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: '#fff'
  },    
  imageContainer: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: { 
    width: '100%', 
    height: '100%', 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    resizeMode: 'cover'
  },
  details: {
    padding: 10
  },
  title: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 5
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    fontSize: 12,
    marginLeft: 5,
    color: '#333'
  },
  stock: {
    fontSize: 12
  }
})

export default ProductCard;
