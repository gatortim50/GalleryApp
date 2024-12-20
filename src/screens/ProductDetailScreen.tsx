import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Product } from '../state/types'
import { PhoneStackParamList } from '../navigation/PhoneNavigator'
import FastImage from 'react-native-fast-image'

type ProductDetailScreenRouteProp = RouteProp<PhoneStackParamList, 'ProductDetail'>

type ProductDetailScreenProps = { product?: Product }

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = (props) => {
  const route = useRoute<ProductDetailScreenRouteProp>()
  const product = props.product || route.params.product

  const lastImage = product.images[product.images.length - 1]

  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: lastImage }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: '100%', height: 300, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#555' },
});

export default ProductDetailScreen;
