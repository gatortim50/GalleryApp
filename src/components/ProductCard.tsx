import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { Product } from '../state/types';

type ProductCardProps = {
  product: Product;
  onPress: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TouchableOpacity 
        onPress={onPress} 
        style={styles.card}
    >
        <ShimmerPlaceholder 
            visible={!isLoading}
            style={styles.image}
        >
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.image}
          onLoad={() => setIsLoading(false)}
        />
      </ShimmerPlaceholder>
      <Text style={styles.title}>{product.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { padding: 10, backgroundColor: '#fff', marginBottom: 10 },
  image: { width: '100%', height: 150, borderRadius: 10 },
  title: { marginTop: 10, fontSize: 16, fontWeight: 'bold' },
});

export default ProductCard;
